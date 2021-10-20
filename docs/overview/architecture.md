---
sidebar_position: 1
---

# Architecture

Cyclic apps are built and deployed into AWS. We pre-provision a serverless app using cloudformation.

At first launch we select an available stack and deploy the code for your app into the existing lambda.

For subsequent launches we update the lambda to use your latest code.

Components:

- Route53 records
- CloudFront distribution
- ACM certificates
- API Gateway HTTP API
- Log group for access logging
- Lambda execution environment
- Log group for lambda runtime
- S3 bucket for code storage
- Build/deploy log storage
- Streaming of application logs to console
- Streaming of build/deploy logs to console
