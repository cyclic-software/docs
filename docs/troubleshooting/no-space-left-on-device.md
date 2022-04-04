---
# sidebar_position: 2
---

# No space left on device

If you get an error in the deploy log that says `No space left on device`, here is how to fix.

## Error message

```code
fatal: cannot create directory at 'some_large_file.txt': No space left on device
2021-12-06 10:49:49: [CYCLIC] Build Failed
Push a new commit to start another.
```

## Solution

The only resolution at this time is to trim your dependencies or devDependencies.

## Why does this happen?

Cyclic builds and deploys apps using serverless technologies. We have 10 GB of space to use to install your `dependencies` and `devDependencies`, then build your code bundle. The bundle may not exceed 250 MB as we need some space to bundle some Cyclic code as well.

If your space requirements exceed these amounts, while running the install step you will see a `No space left on device` error.

Several SPA frameworks (including React) by default include build time tools in standard generated `dependencies`. If you move these to `devDependencies` you will most likely resolve any space issues.
