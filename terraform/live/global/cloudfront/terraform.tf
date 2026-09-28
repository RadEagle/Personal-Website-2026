terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.52"
    }
  }

  required_version = ">= 1.15"

  backend "s3" {
    bucket = "jqc-portfolio-state"
    key    = "global/cloudfront/terraform.tfstate"
    region = "us-east-1"

    use_lockfile = true
    encrypt      = true
  }
}