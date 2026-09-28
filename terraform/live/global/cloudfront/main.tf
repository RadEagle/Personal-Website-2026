resource "aws_s3_bucket" "static_server" {
  bucket = "jqc-portfolio-site"

  tags = {
    Name = "Jonathan Chau Portfolio Site"
  }
}

resource "aws_cloudfront_origin_access_control" "default" {
  name                              = "default-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

data "aws_acm_certificate" "my_domain" {
  region    = "us-east-1"
  domain    = "www.${var.domain_name}"
  statuses  = ["ISSUED"]
  key_types = ["RSA_2048", "EC_prime256v1"]
}

data "aws_cloudfront_cache_policy" "caching_optimized" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "distribution" {
  origin {
    domain_name              = aws_s3_bucket.static_server.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.default.id
    origin_id                = "site-bucket"
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = [var.domain_name, "www.${var.domain_name}"]

  default_cache_behavior {
    target_origin_id       = "site-bucket"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    cache_policy_id        = data.aws_cloudfront_cache_policy.caching_optimized.id

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.viewer_request.arn
    }
  }

  viewer_certificate {
    acm_certificate_arn      = data.aws_acm_certificate.my_domain.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

resource "aws_cloudfront_function" "viewer_request" {
  name    = "viewer-request"
  runtime = "cloudfront-js-2.0"
  comment = "Rewrite incoming viewer requests"
  code    = file("${path.module}/viewer-request.js")
}
