---
# sidebar_position: 2
---

# Nodemon

## Error message

After first deploying your app, you visit the url and see:
```json
{
    "message": "Internal Server Error"
}
```

You then investigate further by going to the `Logs` or `Transactions` tab of your app and see something like:

```
2021-12-20 08:37:31: sh: nodemon: command not found
2021-12-20 08:37:31: internal/modules/cjs/loader.js:905
[...]
```

or something like:
```
2021-12-20 08:45:53: internal/modules/cjs/loader.js:905
throw err;
^

Error: Cannot find module '../lib/cli'
Require stack:
- /var/task/node_modules/.bin/nodemon
...
```

## Solution
This is happening because your `package.json` is using nodemon in its start script definition:
```json
...
"scripts": {
  "test": "mocha tests/unit/",
  "start": "nodemon server.js"
}
...
```
Nodemon is an excellent tool for locally developing node applications. Locally, nodemon watches for file changes at the path it is monitoring and restarts the local server. In production mode, serverless or not - restarting the server on file changes is usually not a desired behavior. 

The above `package.json` should be changed to:
```json
...
"scripts": {
  "test": "mocha tests/unit/",
  "dev": "nodemon server.js"
  "start": "node server.js"
}
...
```

While the `"start"` script may differ for various node frameworks, it should be defined to start the application in production mode with the appropriate flags and parameters. By convention, the `"dev"` script is used to start the application in development mode primarily for running on local installations.

## Watch an overview here: 
<iframe width="560" height="315" src="https://www.youtube.com/embed/L49HvtJ2kXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>