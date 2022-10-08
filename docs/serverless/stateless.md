---
sidebar_position: 3
---

# Stateless
Cyclic apps run on read-only file systems amd do not retain or share memory across compute instances.

## Limitations and Solutions 

Special precautions should be used for the following use-cases:

### In-Memory Sessions
Basic session implementations are usually built with the assumption that the server process is never interrupted. This can be an issue even in stateful environments, where a server re-start will cause sessions to be lost. With serverless runtimes, re-starts happen quickly *(~0.2s)* and frequently.

:::tip Database backed sessions
Best practices for stateful environments will dictate that sessions should be backed up to a database. With serverless, storing sessions in a database is a must. There are many libraries and session extensions that enable this for a variety of databases.

Check out the linked example for how it can be done with Cyclic's included database >> [DynamoDB](https://github.com/cyclic-software/starter-user-app/blob/8955eeeab73a37b3a4f0f813f13f2322ca16bb14/src/index.js#L39)
:::

### File Upload
Serverless apps run on read-only file systems. This means it is impossible to persistently store files to disk. 

:::tip AWS S3 and Uploading/Downloading Files 
Cyclic exposes many features of AWS S3 directly to your apps. To handle uploads directly to the object store, S3 can be used to generate pre-signed GET, PUT and POST urls than can be used by a client to upload and download files over the 6MB api size limitation. 

[Read more on presigned URLs](https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/)
:::
#### Processing and Uploading 
The `/tmp` directory can be written to. But it should only be used for intermediary processing. Either upload the result to an object store or download to the client. An example use case for `/tmp` may be to create thumbnail images, store them in /tmp, and then upload them to S3.

### db.json
A popular pattern with many tutorials is to simulate a database by reading and writing records to and from a `db.json` file. In traditional server environments, this pattern may work for some *very* low volume of read's and write's, it will very quickly become vulnerable to race conditions and should be avoided even in those environments.

While it is possible to write to the `/tmp` directory in a stateless runtime, the `/tmp` directory is not shared between multiple instances of the application and is lost after each shutdown. This makes the same issues that arise in a stateful environment immediately apparent. 

:::danger
Do not use a `json` file as your database. Cyclic [has a database](/concepts/database) you can use for free. 
:::
