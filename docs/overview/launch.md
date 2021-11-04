---
sidebar_position: 4
---

# Launch

Cyclic apps are hosted on AWS serverless infrastructure. This means any lambda constraints are inherited.

- 30s Maximum request time
- 6MB Maximum HTTP POST payload size

- Runtime Nodejs 14.x
- 5 API requests per second

## Start

Cyclic launches your app by calling `npm start`. We will then send requests to your app on `3000`. The suggested best practices is to listen like so:

```js
var port = process.env.PORT || 3000
```

## Failures

If you code fails to initialize then you may get an error at your URL endpoint that says: `Unable to proxy`.
