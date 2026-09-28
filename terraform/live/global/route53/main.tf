data "terraform_remote_state" "cloudfront" {
  backend = "s3"

  config = {
    bucket = "jqc-portfolio-state"
    key    = "global/cloudfront/terraform.tfstate"
    region = "us-east-1"
  }
}

data "aws_route53_zone" "primary" {
  private_zone = false
  zone_id      = "Z0053682TTLZ4XEYANXQ"
}

resource "aws_route53_record" "plain" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = data.terraform_remote_state.cloudfront.outputs.domain_name
    zone_id                = data.terraform_remote_state.cloudfront.outputs.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = data.terraform_remote_state.cloudfront.outputs.domain_name
    zone_id                = data.terraform_remote_state.cloudfront.outputs.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "plain-ipv6" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = var.domain_name
  type    = "AAAA"

  alias {
    name                   = data.terraform_remote_state.cloudfront.outputs.domain_name
    zone_id                = data.terraform_remote_state.cloudfront.outputs.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www-ipv6" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = "www.${var.domain_name}"
  type    = "AAAA"

  alias {
    name                   = data.terraform_remote_state.cloudfront.outputs.domain_name
    zone_id                = data.terraform_remote_state.cloudfront.outputs.hosted_zone_id
    evaluate_target_health = false
  }
}