---
sidebar_position: 4
---

# Launch

Cyclic apps are hosted on AWS serverless infrastructure. This means any lambda constraints are inherited. This also means there are no servers to manage, no OS patches to apply, no maintenance windows to schedule and no networking headaches.

There at no servers to start or stop. When your app gets more requests Lambda will intialize more runtimes for you. We will then start your app and send it all the http traffic.

## Start

Cyclic launches your app by calling `npm start`. We will then send requests to your app on port `3000`. The suggested best practices is to listen like so:

```js
var port = process.env.PORT || 3000
```

## Failures

If you code fails to initialize then you may get an error at your URL endpoint that says: `Unable to proxy`. This is due to your app either not listening on the correct port or failing to start properly from the call to `npm start`.
