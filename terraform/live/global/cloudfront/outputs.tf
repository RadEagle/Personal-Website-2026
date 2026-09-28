output "domain_name" {
  value       = aws_cloudfront_distribution.distribution.domain_name
  description = "The domain name of the cloudfront server"
}

output "hosted_zone_id" {
  value       = aws_cloudfront_distribution.distribution.hosted_zone_id
  description = "Cloudfront's hosted zone id"
}