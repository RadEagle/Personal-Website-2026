provider "aws" {
  region = "us-east-1"
}

data "terraform_remote_state" "cloudfront" {
  backend = "s3"

  config = {
    bucket = "jqc-portfolio-state"
    key    = "global/cloudfront/terraform.tfstate"
    region = "us-east-1"
  }
}

resource "aws_iam_openid_connect_provider" "github" {
  url            = "https://token.actions.githubusercontent.com"
  client_id_list = ["sts.amazonaws.com"]
}

resource "aws_iam_role" "github_actions_s3_upload" {
  name               = "GitHubActionsS3Upload"
  assume_role_policy = data.aws_iam_policy_document.github_actions_s3_upload.json
}

resource "aws_iam_role_policy" "github_actions_s3_upload" {
  role   = aws_iam_role.github_actions_s3_upload.id
  policy = data.aws_iam_policy_document.github_actions_permissions.json
}

data "aws_iam_policy_document" "github_actions_s3_upload" {
  statement {
    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }

    actions = [
      "sts:AssumeRoleWithWebIdentity"
    ]

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:RadEagle@31170739/Personal-Website-2026@1381993270:ref:refs/heads/main"]
    }
  }
}

data "aws_iam_policy_document" "github_actions_permissions" {
  statement {
    actions = [
      "s3:ListBucket"
    ]

    resources = [
      data.terraform_remote_state.cloudfront.outputs.s3_bucket_arn,
    ]
  }

  statement {
    actions = [
      "s3:GetObject",
      "s3:PutObject",
      "s3:DeleteObject",
    ]

    resources = [
      "${data.terraform_remote_state.cloudfront.outputs.s3_bucket_arn}/*",
    ]
  }

  statement {
    actions = [
      "cloudfront:CreateInvalidation"
    ]

    resources = [
      data.terraform_remote_state.cloudfront.outputs.cloudfront_distribution_arn,
    ]
  }
}