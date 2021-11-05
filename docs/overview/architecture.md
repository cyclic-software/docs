---
sidebar_position: 1
---

# Architecture

Cyclic apps are built and deployed into AWS. We pre-provision a serverless app using cloudformation.

At first launch we select an available stack and deploy the code for your app into the existing lambda.

For subsequent launches we update the lambda to use your latest code.

## Components

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

## Design principles

In designing and building Cyclic we must make decisions and trade offs. Here is a statement of the principle that guide our decisions in priority order.

1. Work vs "Right"
2. Fail fast vs "Later"
3. Fail predictably
4. Tell the user

### Work

The first priority is for the system to work in the way the user expects. This may mean more complexity or difficulty for Cyclic. The elegance or simplicity of system code comes after it working for the user. If forced to chose we will follow common usage over compliance with a technical spec.

### Fail fast

It is better to fail bigger and sooner than letting non-functional or partially functional code travel to the next step. Said another way it is better to fail at the build stage letting the user know the code can't launch than to succeed and wait for the launch stage for the user to discover the code can not launch or only sorta works.

If given the choice we would rather completely break sooner then be partially broken later in a process.

### Fail predictably

Failure will happen. When it does we should make it repeatable. The same inputs should lead to the same failure. Similar failures should be processed in the same way.

### Tell the user

When errors happen we should be transparent with the error message, stack trace, or known bug. This could mean we need to email the user or tell the world on twitter.
