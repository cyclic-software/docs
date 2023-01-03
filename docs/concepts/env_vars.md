---
sidebar_position: 4
---

# Variables

Environment variables are key-value pairs defined to match a specific application environment (local, dev, prod, etc.). Often they contain 
- Flags that control the application behavior
- Secrets and api keys that can differ by environment

## Setting Variables

### Local

### Cyclic

Cyclic stores environment variables securely by encrypting them at rest, and  are visible to users that have permissions to the app environment. 

## Accessing Variables

### Build
### Runtime


On local, environment variables can be set by exporting their values in the shell environment 

Application code on the **backend** has access to these values via `process.env` during runtime and build. 



## Reserved Environment Variables

Cyclic apps run on AWS and have pre-configured AWS credentials for access to the built-in S3 Storage and DynamoDB Database. 

For this Cyclic reserves the following environment variables:
```
AWS_REGION
AWS_ACCESS_KEY_ID
AWS_SECRET_KEY
AWS_SECRET_ACCESS_KEY
```

If you are using resources in your own AWS account and would like you add your own credentials.
Consider using alternative environment variables and setting the credentials on the SDK clients directly:

```
    const { S3Client } = require("@aws-sdk/client-s3");
    let client = new S3Client({
        region: process.env.MY_REGION,
        credentials:{
            accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY
        }
    });
```