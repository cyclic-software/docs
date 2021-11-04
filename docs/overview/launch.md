---
sidebar_position: 4
---

# Launch

Cyclic apps are hosted on AWS serverless infrastructure. This means any lambda constraints are inherited. This also means there are no servers to manage, no OS patches to apply, no maintenance windows to schedule and no networking headaches.

## Hard limits

- 30s Maximum request time
- 6MB Maximum HTTP POST payload size


## Soft limits

- Runtime Nodejs 14.x
- 5 API requests per second steady state
- 10 API requests per second in a burst

## Start

Cyclic launches your app by calling `npm start`. We will then send requests to your app on `3000`. The suggested best practices is to listen like so:

```js
var port = process.env.PORT || 3000
```

## Failures

If you code fails to initialize then you may get an error at your URL endpoint that says: `Unable to proxy`.
