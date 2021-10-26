---
sidebar_position: 2
---

# Build

Cyclic apps are built and deployed into AWS from code that originates in Github.

Install the [Cyclic Github app](https://github.com/apps/cyclic-app) on any public repo. On first installation we will build and deploy your app as described below. On future commits (merges of PRs or pushes for example) will trigger API calls to Cyclic and we will rebuild and deploy your app.

The input of the **build** step is a single commit in a git repo and the output is a zip archive that can be deployed and run inside of an AWS lambda.

<div style={{textAlign: 'center'}}>

![Cyclic Github app installation API call pattern](/img/diagram/build-process.drawio.png "Cyclic Github app installation")

</div>

## Code

The following is a close approximation of the code we use to take your code repo and turn it into an artifact that can be hosted inside of AWS Lambda.

```bash
npm ci
zip -r lambda.zip ./*
mv lambda.zip s3://your-app-bucket/code/lambda.zip
```

## Lifecycle scripts

NPM executes several [lifecycle scripts](https://docs.npmjs.com/cli/v7/using-npm/scripts#npm-ci) as part of the `npm ci`. According to the documentation these are run in the following order:

- `preinstall`
- `install`
- `postinstall`
- `prepublish`
- `preprepare`
- `prepare`
- `postprepare`

If you have particular needs try putting it into the appropriate lifecycle script. If you have needs beyond what these lifecycle scripts can provide or they don't solve for your use case send us an email: <hello@cyclic.sh> or join us on [Discord](https://discord.gg/huhcqxXCbE)
