---
sidebar_position: 4
---

# Developing Serverless Applications

Serverless gives apps the ability to scale up to handle a huge volume of traffic or scale down to zero when there is no traffic. Scaling up and down happens very quickly *(~0.2 seconds)*. This ability to scale down to zero is what allows us to offer many [free features](https://cyclic.sh/pricing) that make cyclic [different](/).


:::tip How serverless works
- 'Servers' are spun up on demand whenever a request comes in
- When a request comes in while other 'servers' are bust processing a different request, another 'server' will spin up
- With high traffic, there may be _dozens_ of servers running _at the same time_
- These 'servers' do not share memory
- A 'server' is suspended immediately after it returns a response
:::


## what to do

### 1. Assume that your code between request and response

### 1. Use object stores to save files
    Serverless apps run on read-only file systems. This means it is impossible to persistently store files to disk. While the  `\tmp` is writable, it is temporary and should only be used for processing during a request. 



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
