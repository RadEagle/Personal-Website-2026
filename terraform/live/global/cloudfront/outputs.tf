output "domain_name" {
  value       = aws_cloudfront_distribution.distribution.domain_name
  description = "The domain name of the cloudfront server"
}

output "hosted_zone_id" {
  value       = aws_cloudfront_distribution.distribution.hosted_zone_id
  description = "Cloudfront's hosted zone id"
}

output "s3_bucket_arn" {
  value       = aws_s3_bucket.static_server.arn
  description = "The ARN of the website S3 bucket"
}

output "cloudfront_distribution_arn" {
  value       = aws_cloudfront_distribution.distribution.arn
  description = "The ARN of the cloudfront distribution"
}