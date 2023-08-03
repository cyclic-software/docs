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

In designing and building Cyclic we must make decisions and trade offs. Here is a statement of the principles that guide our decisions, in priority order.

1. Working vs "Correct"
2. Fail quickly
3. Fail predictably
4. Fail visibly
5. Right to repair

### Working

The first priority is for the system to work in the way the user expects. This may mean more complexity or difficulty for Cyclic. The elegance or simplicity of system code comes after it is working for the user. If forced to choose we will follow common usage over compliance with a technical spec. Said another way, your happiness and code elegance over our happiness and code elegance.

### Fail quickly

It is better to fail bigger and sooner than to let non-functional or partially functional code travel to the next step. Said another way, it is better to fail at the build stage letting the user know the code can't launch than to succeed and wait until the launch stage for the user to discover the code can not launch or only sorta works.

If given the choice we would rather completely break sooner than be partially broken later in a process.

### Fail predictably

Failure will happen. When it does we should make it repeatable. The same inputs should lead to the same failure. Similar failures should be processed in the same way.

### Fail visibly

When errors happen we should show the error message, stack trace, or known bug. This could mean we need to email the user or tell the world on X (formerly known as Twitter).

### Right to repair

Open source is a statement about whether the software system is even available for inspection. We wish to go a step further. Right to repair means you can take a Cyclic app and poke around inside. You can "eject" at anytime and the app will keep running in your account.
