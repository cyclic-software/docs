---
sidebar_position: 2
---

# Build

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
</head>

Cyclic apps are built and deployed into AWS from code that originates in GitHub.

To trigger a build and deployment, install the [Cyclic GitHub app](https://github.com/apps/cyclic-sh) on any public repo. On the first installation, we will assign your repo to an app and give it a public url such as `random-words.cyclic.app`. We will then build and deploy your app as described below. On future commits to the default branch (for example: merges of PRs or pushes) GitHub will send a webhook api call to us. We will then perform the same build and deploy steps.

The input of the **build** step is a single commit in a git repo and the output is a zip archive that can be deployed and run inside of an AWS lambda with the Cyclic lambda runtime.

<div style={{textAlign: 'center'}}>

![Cyclic Github app installation API call pattern](/img/diagram/build-process.drawio.png "Cyclic Github app installation")

</div>

## Code

The following is a close approximation of the code we use to take your code repo and turn it into an artifact that can be run inside of AWS Lambda with the Cyclic lambda runtime.

**Note**: we use `npm` version 8.13.1 throughout.

- `npm install`: Install your code's dependencies (including `devDependencies`)
- `npm run build`: Build your app if you have a `build` script defined in `package.json`
- `npm prune`: Prune any `devDependencies` to minimize the size of the output zip
- `zip`: Zip all of your code and installed dependencies (for example `node_modules`) recursively

**Note**: we have limits on the maximum amount of disk space used for code + dependencies while building and on the final bundle size. See [limits page](/overview/limits) for more details.

## Customize the build process

NPM executes several [lifecycle scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts#npm-install) as part of the `npm install` and `npm run build`. According to the documentation these are run in the following order:

**`npm install`**
- `preinstall`
- `install`
- `postinstall`
- `prepublish`
- `preprepare`
- `prepare`
- `postprepare`

**`npm run build`**
- `prebuild`
- `build`
- `postbuild`

If you have particular needs, try putting them into the appropriate lifecycle script. If you have needs beyond what these lifecycle scripts can provide, or they don't solve your use case, send us an email: <i className="far fa-envelope"></i> hello@cyclic.sh or join us on [<i className="fab fa-discord"></i>  Discord](https://discord.gg/huhcqxXCbE).

### Advanced Build Options

By default, the build process and the above lifecycle scripts:
-  run at the root of the repo 
-  everything at the root of the repo is bundled
   -  except files specified in `.npmignore`
-  At runtime `npm run start` is used to execute the application

It is possible to customize this process with _Advanced Build Options_:
- at the time of the first deployment, in the _Advanced_ dropdown
  - <img src="/img/build-options/advancedWNode.png" width="350px"/>
- in  _Environments_ tab > _Build Options_ of an app's dashboard
  - <img src="/img/build-options/buildwithnode2.png" width="650px"/>

#### **Root Path**
The root path specifies which directory Cyclic will run build scripts. 
For example, for a repository structured as:
```
├──/frontend
|   ├── ...
|   └── package.json
├──/backend
|   └── ...
└──package.json
```

To have cyclic run `npm run build` in the `frontend` directory, configure "Root Path" as `/frontend`.

#### **Output Path**
The contents of the _Output Path_ are bundled for deployment. For example, if a build directory is generated inside `/frontend` at the end of the above build:
```
├──/frontend
|   ├── build
|   |   ├── index.html
|   |   └── package.json
|   ├── ...
|   └── package.json
├──/backend
|   └── ...
└──package.json
```
To make sure that the _build output_ are the only files to be bundled, specify `/frontend/build` as the _Output Path_.


:::caution `npm run start`
**Unless the output is a static site**, the output directory should still contain a package.json with a valid start script for run time. 

Read more about the [launch procedure](/overview/launch#start).
:::

#### **Static Site**
Check this toggle if the contents of the output directory are only static files and do not contain a server instance. 
This applies to build outputs of static site framework builds such as React, Vue, Angular, etc.

This video will give you an example of how to deploy a static site without a backend on Cyclic:
<iframe width="350" height="230" src="https://www.youtube.com/embed/-B98D6x8mBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


#### **Runtime**
Newly deployed Cyclic apps will use Node.js v18.12.1 by default. If you are using a framework or library that requires an older version of Node.js to function properly, you may adjust it here.
<img src="/img/build-options/runtime.png" width="350px"/>



