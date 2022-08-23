---
sidebar_position: 5
---

# Limits

Cyclic apps have limits on capacity and usage. Some of these are inherited from the underlying hosting implementation and some are to protect the quality and stability of the service for all users.

Hard limits cannot be changed. Soft limits may be changed but they require a conversation with us and depending on the use case possibly a paid plan: <hello@cyclic.sh>

## Hard limits

- 30s Maximum request time
- 6MB Maximum HTTP POST payload size
- No streaming of requests or responses
- 512MB of ephemeral disk space mounted at `/tmp`
  - the data will persist between invokes but there is no guarantee that any further invocations will use the same instance and thus can not be relied on to store persistent data.
- 5 TB single file size in S3 storage

## Soft limits

- Runtime Nodejs 16.x or 14.x
- 5 API requests per second steady state (for free tier)
- 10 API requests per second in a burst (for free tier)
- 10 GB code and dependencies file size while building
- 240 MB final code bundle size per app
- 1 GB of S3 storage (for free tier)
- 10 GB of S3 transfer out to internet (for free tier)
- 1 GB of DynamoDB storage (for free tier)

## AWS Regions

Cyclic apps are launched in the following regions:

- af-south-1
- ap-east-1
- ap-northeast-1
- ap-northeast-2
- ap-south-1
- ap-southeast-1
- ap-southeast-2
- ca-central-1
- eu-central-1
- eu-north-1
- eu-south-1
- eu-west-1
- eu-west-2
- eu-west-3
- me-south-1
- sa-east-1
- us-east-1
- us-east-2
- us-west-1
- us-west-2
