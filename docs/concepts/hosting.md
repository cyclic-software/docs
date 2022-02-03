---
sidebar_position: 3
---
# Hosting

We describe hosting in terms of where the underlying app infrastructure is hosted. While the application code is executed on AWS Lambda compute, the Lambdas themselves can be hosted in any AWS cloud account, ours or yours.

## Cyclic-hosted
Cyclic manages limits and constraints as well as the access boundaries and permissions to cloud resources external to the application to maintain logical isolation of your apps. 

## Self-hosted
While Cyclic still helps you manage deployments, config and features of the runtime, you have **full control** of the app infrastructure with access to customize, take apart and tinker. This enables use-cases like: 
  - Integration with other AWS infrastructure in your own accounts like:
    - Connect a Cyclic app to a SageMaker model
    - Use Cyclic apps to produce alerts based on CloudWatch alarms 
    - Connect apps to AWS data services like S3 or Dynamo
  - Define and enforce your own limits and constraints
    - Apps come pre-configured with sensible defaults with respect to compute sizing and network quotas; self-hosting allows you to override Cyclic defaults
  - Include Cyclic apps in your existing log aggregation solutions
  - Bring Cyclic apps under your security and service control policies
    - In your own account, you own all things IAM, permission boundaries, service roles, etc. 