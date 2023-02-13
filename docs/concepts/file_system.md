---
sidebar_position: 4
---

# File System

The Node.js file system module gives you access to the file system on your local environment. To include the `fs` modules use the `require()` method:
`const fs = require('fs');`

The `fs` method is often used for reading, creating, updating, deleting, and renaming files, however there is a long list of methods, which you can see here in the Node documentation: [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html).

Files created by the `fs` module are read-only once the project is deployed to Cyclic.sh. This results in an `EROFS: Error Read-Only File System` error. 

Make sure that you are writing to a file that is located in  your `/tmp` directory, if you would like to avoid this error.

An alternate solution to this error is to use the Cyclic S3fs drop-in replacement for Node.js `fs`, which gives you acces to an AWS S3 bucket to write to in your app in place of your local file system.

Instructions to use the `@cyclic.sh/s3fs` npm module can be found in the README.md for the module. [Try the S3fs module.](https://github.com/cyclic-software/s3fs)