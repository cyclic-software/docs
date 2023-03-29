---
# sidebar_position: 2
---

# Size limits

Cyclic builds and deploys apps using serverless technologies. The build environment has 10 GB of space to use to install your `dependencies` and `devDependencies`, then build your code bundle. 
The built bundle may not exceed 240 MB.

## Bundle limit
The size of the packaged code that is deployed is limited to 240 MB. By default, any generated files and the entire repo contents are packaged. 

Several SPA frameworks (including React) by default include build time tools in standard generated `dependencies`. If you move these to `devDependencies` you will most likely resolve any space issues.

### Error message

```code
2021-12-06 10:49:49: [CYCLIC] ERROR: The total size of the post-build project code and
 production dependencies cannot exceed 240MB. The total size of your build is ${mb} MB
```

If you get an error in the deploy log that says `production dependencies cannot exceed 240MB`, here is how to fix it.

### Solution
Currently, the code size is limited to 240MB. Fortunately, most projects are can to be optimized by appropriately organizing dependencies and excluding unnecessary files from the build. 
- remove any unused dependencies
- move any dev dependencies to `devDependencies`
- add file patterns to an `.npmignore` file to exclude them from the build

:::tip  `.npmignore` uses the same syntax as `.gitignore`
Read more about <a href="https://www.atlassian.com/git/tutorials/saving-changes/gitignore" target="_blank">ignoring path patterns</a>
:::

## Build environment limit
The build environment has 10 GB disk and 10 GB RAM available for temporary use to run the installation and build `npm` scripts defined in the repos `package.json`.
## Error message
If your space requirements exceed these amounts, while running the installation or step you will see a `No space left on device` error.

```code
fatal: cannot create directory at 'some_large_file.txt': No space left on device
2021-12-06 10:49:49: [CYCLIC] Build Failed
Push a new commit to start another.
```

### Solution
The only resolution at this time is to trim your dependencies or devDependencies.




