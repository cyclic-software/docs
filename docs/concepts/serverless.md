---
sidebar_position: 4
---

# Serverless

Cyclic apps are serverless, this gives apps the ability to scale up to handle a huge volume of traffic or scale down to zero when there is no traffic. Scaling up and down happens very quickly *(~0.2 seconds)*. This ability to scale down to zero is what allows us to offer many [free features](https://cyclic.sh/pricing) that make cyclic [different](/).

Serverless is a relatively new Two important factors to consider when developing or migrating applications for serverless environments:

#### Compute is provisioned on-demand
- runtime is started when it is needed
- runtime suspended quickly after
- multiple runtimes can be active simultaneously

#### Compute is stateless
- runtimes do not retain memory after they are shut down
- write access is only available to the `/tmp` directory
- simultaneously active runtimes do not share memory or `/tmp` disk
  


## On-Demand 
Serverless means applications are only `on` for the time it takes to process individual requests. 
  
This can limit some traditional server use cases:
### Sockets
Socket connectivity is not available because it requires the server to continuously be connected to a potentially idle client. [Read more](/troubleshooting/websockets)
:::note  Workaround
Some popular socket connection libraries such as `SocketIO` have automatic fallback mechanisms to revert to polling for this scenario. Polling works for many use cases that do not require instantanious real-time push from server. 

Keep in mind that polling uses up a lot of requests and chose an appropriate polling rate for your use-case that is not excessive.
:::

### Background Processes
Since the environments are driven on and off by network requests. It is impossible to keep a background process running longer than the time it takes to process a single request *(max 30 seconds)*. If the background process can be short-lived, you may be able to manage starting alongside your Node.JS app. 

:::info  Short-Lived Background Processes
Even though it is not possible to run a background process longer than it takes to server a request, a short-lived process can be started alongside your Node.JS app by scripting it's execution as part of the `start` script in `package.json`.
:::

### Cron Tasks
Cron tasks are technically long running processes and cannot be run in the same way that they do un a unix environment. You can still build the behavior you need by specifying cron tasks in the Cyclic dashboard.
:::tip  Cron Tasks
The Cyclic dashboard allows you can configure scheduled requests to specific api routes to run up to once an hour (with one minute resolution) or trigger at a specific time (one second resolution).
:::
