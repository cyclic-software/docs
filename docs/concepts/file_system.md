---
sidebar_position: 4
---

# File System

The Node.js file system module gives you access to the file system in your local environment. To include the `fs` modules use the `require()` method:
`const fs = require('fs');`

The `fs` module is often used for reading, creating, updating, deleting, and renaming files, though there is a long list of methods that you can see in the Node documentation: [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html).

Files created by the `fs` module are read-only once the project is deployed to Cyclic.sh. This results in an `EROFS: Error Read-Only File System` error. 

If you are hitting the `EROFS` error in processing files, one solution is to write to a file that is located in a `/tmp` directory. However, do not use `/tmp` for permanent storage, as is it wiped frequently.

A more permanent solution to this error is to use the Cyclic S3fs drop-in replacement for Node.js `fs`, which gives you access to an AWS S3 bucket to access as file storage in place of your local file system.

Instructions to use the `@cyclic.sh/s3fs` npm module can be found in the README.md for the module. [Try the S3fs module.](https://github.com/cyclic-software/s3fs)