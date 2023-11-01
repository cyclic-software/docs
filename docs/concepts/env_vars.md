---
sidebar_position: 4
---

# Variables

Environment variables are key-value pairs defined to match a specific application environment (local, dev, prod, etc.). Often they contain 
- Flags that control the application behavior
- Secrets and api keys that can differ by environment

## Setting Variables
### Local
:::danger Do not put your `.env` file in GitHub
Especially if your repo is public. Make sure to add `.env` file to your `.gitignore`. If you accidentally push your `.env` file to GitHub, its contents will be permanently in the repository's history - **even if you delete it afterwards**
:::

On local, there are many ways to get environment variables into your application. Refer to these popular packages for more info:
- env-cmd - <a href="https://www.npmjs.com/package/env-cmd" target="_blank">https://www.npmjs.com/package/env-cmd</a> (recommended)
  - can be used in package.json scripts to injects variables from `.env` without changes to application code. For example: 
    - in `dev` - load local env vars from `.env` and watch for file changes
    - when deployed, Cyclic runs `start`. env-cmd is not needed since variables are available automatically. This way `env-cmd` only has to be a `devDependency` 
    ```js
    ...
     "scripts": {
            "start": "node index.js",
            "dev": "env-cmd node --watch index.js"
       }
    ...
    ```
      - tip: as of node 18, `node --watch` can be used to watch for file changes in place of `nodemon`
- dotenv - <a href="https://www.npmjs.com/package/dotenv" target="_blank">https://www.npmjs.com/package/dotenv</a>
  - sets variables from a `.env` file with:
    ```js
    require('dotenv').config()
    ```


### Cyclic

Environment variables can be set on first deployment via **Advanced** build options and then **Variables** tab.

Environment variables can be set after a first deployment in an app's dashboard via the **Variables** tab.

Cyclic stores environment variables securely by encrypting them at rest, they are visible only to users that have permissions to the app environment. 

:::tip Changes are applied immediately
Changes to environment variables are applied immediately to running apps **without a re-deployment**.
:::

All apps are preset with the following variables:
- `CYCLIC_URL` - the default url of the app
- `CYCLIC_DB` - the name of the AWS DynamoDB table available to the app
- `CYCLIC_BUCKET_NAME` - the name of the AWS S3 Bucket available to the app
- `CYCLIC_APP_ID` - the app environments unique id 

There are two ways to set up variables:
#### Key-Value Editor:

<img src="/img/vars/kv_editor.png" width="800px"/>

> Add the variable name and value with *+ Add Variable*, then *Save*

#### Bulk Editor:
<img src="/img/vars/bulk_editor.png" width="800px"/>

> A text editor that allows you to work on multiple variables at once in a similar syntax to `.env` files with the exceptions:
> - Comments are not supported
> - Quotes not required and are passed as part of the value 
>   - `VAR="MY VALUE"` will result in your code seeing `"MY VALUE"` rather than `MY VALUE`
>   - `VAR` instead should be set as `VAR=MY VALUE`



## Accessing Variables

### Frontend
:::danger The frontend does not have access to environment variables
Variable values often include database secrets and API keys - they should never be exposed to the frontend.
:::
### Backend
Application code on the **backend** has access to variables via `process.env` during runtime. 

### Build
Environment variables that are set for the runtime are also accessible to the scripts defined in `package.json`


## Reserved Environment Variables

Cyclic apps run on AWS and have pre-configured AWS credentials for access to the built-in S3 storage and DynamoDB database. 

For this, Cyclic reserves the following environment variables:
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

## Watch an overview here: 
<iframe width="560" height="315" src="https://www.youtube.com/embed/qGtEPIbB-7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
