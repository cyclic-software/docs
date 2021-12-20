---
sidebar_position: 2
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
```
...
"scripts": {
  "test": "mocha tests/unit/",
  "start": "nodemon server.js"
}
...
```


Nodemon is an excellent tool for local development of node applications. 