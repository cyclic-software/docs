---
slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 1
---

# What's different about cyclic?

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
</head>

:::tip  Cyclic is **serverless**
There are **no servers, no containers, no images, no hours to count.** Each app is deployed entirely on serverless cloud infrastructure.
:::
### No Sleep

Even with free tier. Apps do not have to sleep, wake up, spin up or recycle. All front-ends and back-ends are ready on-demand, immediately and at all times. 

### No Overload

Containers make traffic a constant concern because resources are shared across concurrent requests. 

On Cyclic, serverless functions are allocated to each individual request on demand, making it possible for your apps to hyper scale.


:::danger **Hyper** scale 
On Cyclic free tier, an individual `1GB RAM` compute instance handles each separate http request. For a single request, this is about ~2x cpu/memory compared to popular container platforms. In a 10 concurrent request scenario, this comparison results in `~200x` or `100GB RAM` available system compute - _on free tier_!

:::
<!-- Since apps are only actually running for a This means there are no minutes or hours to measure -->

### Cloud-scale Database and Storage
Database and storage on free tier. **1GB of AWS S3 file object storage as well as a 1GB AWS DynamoDB NoSQL database** are available for all apps. Cyclic
makes it simple to use the services without having to set up an AWS account. To make using the AWS database even easier, check out our open source [DynamoDB SDK](https://github.com/cyclic-software/db-sdk)

### Worldwide
Apps can be launched around the world to make sure your users see the least latency. Apps can also be launched across the world to minimize downtime with default active-active failover strategy. 


### Right-to-Repair
We are developers here, sometimes we want to open the box and change everything around. You are welcome to open the hood, poke around or take your apps apart. When **apps grow up**, take them with you, integrate them into _legacy code_.
:::tip  You can have your own cyclic apps and host them too
Given a role, **Cyclic can deploy apps into your own AWS account**. This allows you to have total and complete control over your app's infrastructure. Self-hosting gives the root access to integrate, customize and set your own limits.
:::

### CI/CD
A pipeline is built into every app and integrated with GitHub. Changes are live in a few seconds with every `git push`. Each deployment is registered, along with build/deploy logs pointing to the specific git change set. You will know exactly what changes went out and when. 



## Deploy some code!
----------
### Quick start

Launch a pre-baked expressjs starter:

[![Deploy Expressjs Starter on Cyclic](/img/cyclic/deploy.svg)](https://app.cyclic.sh/api/app/deploy/cyclic-software/express-hello-world)

### DIY

You can always link your own repository from GitHub.

- Sign up: [https://app.cyclic.sh/api/login](https://app.cyclic.sh/api/login)
- Using GitHub as your login
- Choose "Link my own", and type in your repo name
- Click deploy
- Approve "Cyclic - Preview" app in GitHub
- Watch the terminal for your deployment logs


:::note Language and runtime support

Cyclic supports Node.js 18, 16 and 14 runtimes for both building and running apps. Let us know if you are looking for another language or version: [<i className="fab fa-discord"></i>  Discord](https://discord.gg/huhcqxXCbE) 


:::
