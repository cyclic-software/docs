---
sidebar_position: 1
---

# Apps

Cyclic apps are a combination of code from a git repository and serverless cloud infrastructure. When deployed, they service requests from browsers, servers, other apps, or anything that can call out to the internet over http.

## Infrastructure

Cyclic manages the provisioning, upgrades, instrumentation, configuration and cloud best practices to set your code up with scalible, fault tolerant, serverless infrastructure.
- **AWS Cloud**: App infrastructure is provisioned and managed as infrastructure as code (IAC) in <a href="https://aws.amazon.com/cloudformation/" target="_blank">AWS CloudFormation</a>
- **Serverless**: a cloud execution model that enables your apps to be highly scalable, they can process single requests or millions of requests on demand without having to change logic, managing clusters, tuning parameters or deploying anything.
- **Fault Tolerant**: Apps have the capability to be provisioned with <a href="https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-iv-multi-site-active-active/" target="_blank">active-active disaster recovery strategy</a> in all AWS regions. This means that applications can be made resilient to severe outages, limiting impact to end-users with zero downtime.
### Hosting
App infrastructure is provisioned in Cyclic managed AWS cloud by default but can be configured to be provisioned in your own AWS account. 
- **Cyclic hosted**: cyclic manages limits, constraints as well as the access boundaries and permissions to cloud resources external to the application to maintain logical isolation of your apps. 
- **Self-hosted**: While cyclic still helps you manage deployments, config and features of the runtume, you have **full control** of the app infrastructure with access to customize, take apart and tinker. 

## Runtime
The runtime is the cyclic process that manages the execution of your code

## Code

sadfsadfasdf
You bring the code by connecting a git repository to cyclic. Code is built and deployed on `git push` to the default branch.


Apps are directly linked to their git repositories via webhooks that cyclic installs.
