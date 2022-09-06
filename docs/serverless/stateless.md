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

Check out the lined example for how it can be done with Cyclic's included database >> [DynamoDB](https://github.com/seekayel/starter-user-app/blob/main/src/dynamodb-store/DynamoDBStore.js)
:::

### File Upload
Serverless apps run on read-only file systems.