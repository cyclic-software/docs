---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 1
---

# What's different about cyclic?

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
</head>

:::tip  Cyclic is **serverless**
**There are no servers, no containers and no images.** Each app is deployed entirely on serverless cloud infrastructure.
:::
### No cold containers.

Even with free tier. Apps do not have to sleep, wake up, spin up or recycle. All front-ends and back-ends are ready on-demand, immediately and at all times.

### Un-overload-able.

With containers, resources are shared across any concurrent requests and traffic becomes a constant concern. Serverless functions are allocated to each individual request on demand, making it possible for your apps to hyper scale.


:::danger **Hyper** scale
On Cyclic free tier, an individual `1GB RAM` compute instance handles each separate http request. For a single request, this is about ~2x cpu/memory compared to popular container platforms. In a 10 concurrent request scenario, this comparison results in `~200x` or `100GB RAM` available system compute - _on free tier_!

:::
<!-- Since apps are only actually running for a This means there are no minutes or hours to measure -->

### Worldwide
Apps can be launched around the world to make sure your users see the least latency. Apps can also be launched across the world to minimize downtime with default active-active failover strategy. 


### Right-to-Repair
We are developers here, sometimes we want to open the box and change everything around. You are welcome to open the hood, poke around or take your apps apart. When **apps grow up**, take them with you, integrate them into _legacy code_.
:::tip  You can have your own cyclic apps and host them too
Given a role, **Cyclic can deploy apps into your own AWS account**. This allows you to have total and complete control over your app's infrastructure. Self hosting gives the root access to integrate, customize and set your own limits.
:::

### CI/CD
A pipeline is built into every app and integrated with GitHub. Changes are live in a few seconds with every `git push`. Each deployment is registered, along with build/deploy logs pointing to the specific git change set. You will know exactly what changes went out and when. 



## Deploy some code!
----------
### Quick start

Launch a pre-baked expressjs starter:

[![Deploy Expressjs Starter on Cyclic](/img/cyclic/deploy.svg)](https://app.cyclic.sh/api/app/deploy/cyclic-software/express-hello-world)

### DIY

You can always link your own repository from github.

- Sign up: [https://app.cyclic.sh/api/login](https://app.cyclic.sh/api/login)
- Using github as your login
- Choose "Link my own", and type in your repo name
- Click deploy
- Approve "Cyclic - Preview" app in github
- Watch the terminal for your deployment logs


:::note Language and runtime support

The runtime is nodejs-14. Let us know if you are looking for another language or version: [<i className="fab fa-discord"></i>  Discord](https://discord.gg/huhcqxXCbE) 


:::
