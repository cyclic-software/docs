---
sidebar_position: 2
---

# No space left on device

If you get an error in the deploy log that says `fatal: cannot create directory at 'some_large_file.txt': No space left on device`, here is how to fix.

## Error message

```code
fatal: cannot create directory at 'some_large_file.txt': No space left on device
2021-10-26 10:49:49: [CYCLIC] Build Failed
Push a new commit to start another.
```

## Solution

Cyclic launches your code by running `node .`. By default this will look for a `main` entry in your `package.json`. If that entry does not exist it will then default to `server.js`.

Either you can define a `main` entry that points to your entry point for example:

```json
{
  "main": "src/index.js",
  ...
}
```

## Why does this happen?

By default when you run `npm init` it creates a `main` entry in `package.json` which points to `index.js`. Most frameworks init their entry points in files other than `index.js` in the root directory. Hence the mismatch in default behavior.

If your dependencies exceed 256 MB, while running the install step you will see a `No space left on device` error. The only resolution at this time is to trim your dependencies or devDependencies.

fatal: cannot create directory at 'some_large_file.txt': No space left on device
2021-10-26 10:49:49: [CYCLIC] Build Failed
Push a new commit to start another.
