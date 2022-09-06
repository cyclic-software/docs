---
sidebar_position: 3
---

# Stateless
Cyclic apps run on read-only file systems amd do not retain or share memory across compute instances.

## Limitations and Solutions 

Special precautions should be used for the following use-cases:

### In-Memory Sessions
Basic session implementation usually built with the assumption that the server process is never interrupted. This can be an issue even in stateful environments, where a server re-start will cause session info to be lost. With serverless, re-starts happens very quickly and frequently.

:::tip Database backed sessions
Best practices for stateful environments will dictate that a sessions should be backed up in a database. With serverless, storing sessions in a database is a must. There are many libraries and sessions extensions that enable this for a variety of databases.

Check out the linked example for how it can be done with Cyclic's included database >> [DynamoDB](https://github.com/seekayel/starter-user-app/blob/8955eeeab73a37b3a4f0f813f13f2322ca16bb14/src/index.js#L39)
:::

### File Upload
Serverless apps run on read-only file systems. This means it is impossible to persistently store files to disk. 

:::tip AWS S3 and Uploading/Downloading Files 
Cyclic exposes many features of AWS S3 directly to your apps. To handle uploads directly to the object store, S3 can be used to generate pre-signed GET, PUT and POST urls than can be used by a client to upload and download files over the 6MB api size limitation. 

[Read more on presigned URL's](https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/)
:::
#### Processing and Uploading 
While the `/tmp` directory can be written to, but should only be used for intermediary processing before upload to object store or download to client. An example use case for `/tmp` may be - create thumbnail image, store in /tmp, upload to S3.

### db.json
A popular pattern with many tutorials is to simulate by reading and writing records to and from a `db.json` file. In traditional server environments, this pattern may work for some *very* low volume of read's and write's, it will very quickly become vulnerable to race conditions and should be avoided even in those environments.

While it is possible to write to the `/tmp` directory in a stateless runtime. The `/tmp` directory is not shared between multiple instances of the application and is wiped after a few minutes. This makes the same issues that arise in a stateful environment immediately apparent. 

:::danger
Do not make a `json` file your database. Cyclic [has a database](concepts/database) you can use for free. 
:::