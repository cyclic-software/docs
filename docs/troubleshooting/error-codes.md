---
# sidebar_position: 1
---

# Common Error Codes

No list of common error codes is exhaustive, but the following should help you quickly find an error based on its type and navigate to relevant documentation which may help you resolve it.

### Build Options Errors

- __```ENOENT```No such file or directory__ - Specify build folder
  - See [Advanced Build Options](/docs/overview/build.md#advanced-build-options)
- __Unable to load legacy provider/digital envelope routines unsupported__ - Revert to older version of Node
  - See [Advanced Build Options](/docs/overview/build.md#runtime)
- __Cannot find Data Entry Point__ - Specify which directory Cyclic should look in for package.json
  - See [Main Entry Point Does Not Exist](/docs/troubleshooting/main-entry-point-does-not-exist.md)
- __ERROR: The total size of the post-build project code and production dependencies cannot exceed 240MB__ - Remove or move dependencies
  - See [Size Limits](/docs/troubleshooting/no-space-left-on-device.md)

### Timeout Error

- __Timeout error__ - We have a 30-second hard limit on requests.
  - See [Background Processes](/docs/serverless/on-demand.md#background-processes)

### Database Errors

- __MongoParseError__ - Usually an issue with MongoDB or Mongoose configuration.
  - See [Using MongoDB](/docs/how-to/using-mongo-db.md#connection-example-mongoclient)
- __500 error when trying to load page__ - Start by whitelisting all IPs (0.0.0.0/0) in your Atlas Cluster
  - See [Using MongoDB](/docs/how-to/using-mongo-db.md#atlas-configuration)
- __```EROFS```Read-only file system__ with __'/var/task/tmp/tmp'__ or __"unable to open for write unix"__ - This is the read-only file system error. One solution is the use the S3fs module provided by Cyclic.
  - See [File System](/docs/concepts/file_system.md)

### Other Errors

- __Cannot find module " "__ - If Cyclic is unable to find or run a specific module, it may not be available to Cyclic because of errors in the code or because it is not supported.
  - Ex: CORS - Make sure CORS is installed and required if you are receiving this message regarding CORS.
  - EX: Websockets - If you see "Cannot Find Modules 'ws'", it is in reference to WebSockets. Read more about Cyclic and [Websockets here.](/docs/troubleshooting/websockets.md)
- __npm ERR! gyp ERR!__ - Node-gyp requires Python. Because Python is not currently supported on Cyclic, you will not be able to use this package on Cyclic, resulting in this error. Even if you are not actively using Python in your code, you will encounter this error.
- __```ERROR```:Failed to run "npm run start"__ - Make sure your package.json is in the build folder.
- __"Runs on local, but doesn't run on Cyclic"__ - Not an error code, per se, but a frequent concern. Here's how to troubleshoot:
  - Check package.json has all required dependencies
  - Check that your start script is defined and runs 
  - Check your environment variables are set and match your expectations
