---
sidebar_position: 2
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

Cyclic builds and deploys apps using serverless technologies. AWS provides only 256MB of disk space for each lambda function.

If your dependencies exceed 256 MB, while running the install step you will see a `No space left on device` error.
