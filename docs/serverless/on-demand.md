---
sidebar_position: 2
---

# On-Demand Runtimes 
Serverless means applications are only `on` for the time it takes to process individual requests. They are suspended immediately after the response is produced. 
## Limitations and Solutions 
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

### Async/Await
Runtimes are suspended immediately after a response is sent. This means all promises must be resolved before a response is returned. 

In the following snippet, the `db.write` method takes some time. The database will probably be written to on local or in a persistent environment, but this writing actually happens *after* the response `ok` has already been sent.
```javascript
  router.post('/some_route', requiresAuth(), async (req, res) => {
    db.write(req.body)
    res.send('ok')
  })  
```
Serverless environment are suspended as soon as `ok` is sent, and the write may fail without producing an error. 

To avoid these issues, make sure any promises are resolved before sending responses:
```javascript
  router.post('/some_route', requiresAuth(), async (req, res) => {
    await db.write(req.body)
    return res.send('ok')
  })  
```


