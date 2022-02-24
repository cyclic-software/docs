---
sidebar_position: 4
---

# Launch

Cyclic apps are hosted on AWS serverless infrastructure. This means any lambda constraints are inherited. This also means there are no servers to manage, no OS patches to apply, no maintenance windows to schedule and no networking headaches.

There at no servers to start or stop. When your app gets more requests Lambda will initialize more runtimes for you. We will then start your app and send it all the http traffic.

## Start
Cyclic runs nodejs apps and follows general conventions for running them. In order to identify how to start, a `package.json` file must exist in the root of the repo.

:::tip  TLDR
Cyclic launches your app by calling `npm start`
:::


It is expected that the start command launches an application that listens to http requests on a TCP port.

The convention for nodejs applications has been port 3000 and best practices suggest exposing the port configuration as an environment variable as:
```js
const port = process.env.PORT || 3000
```
Cyclic supports but does not require setting a port via the environment variables.
:::tip  Automatic Port Discovery
The port that the application is listening to is identified automatically and requests.
:::

Port 9001 is reserved for the runtime, other than that any port can be used and will be automatically selected. 


### Fallbacks
`npm start` is the default behavior, the following is the full sequence of fallbacks to identify entry point:
- `npm start` will run the start script defined in `package.json`:
    ```json
    "scripts": {
        "start": "node foo.js"
    }
    ```
- If a `scripts` property does not exist or a `start` script is not defined:
  - npm's default behavior is to run `node server.js`
- If `server.js` does not exist:
  - Cyclic will fall back to running `node .` which expects the entry point to be defined in the `package.json` under the main property
- If the `main` property does not exist in the the `package.json`, node's default behavior is to look for an `index.js` file as the main entry point
- If none of these have been satisfied, the runtime will produce a 500 error on requests



## Failures

If you code fails to initialize then you may get an error at your URL endpoint that says: `Unable to proxy`. This is due to your app either not listening on the correct port or failing to start properly from the call to `npm start`.
