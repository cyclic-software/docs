---
# sidebar_position: 1
---

# Main entry point does not exist

If you get an error in the deploy log that says that your `package.json` points to a file that does not exist, here is how to fix it.

## Error message

```code
ERROR: The main entry point defined in package.json 'index.js' does not exist.

https://docs.npmjs.com/cli/v8/configuring-npm/package-json#main
  
  "main": "index.js"

To fix do the following:
- update the entry in package.json that points to the correct file:

  "main":"./some_folder/some_file.js", 
```

## Solution

Cyclic launches your code by running `node .`. By default this will look for a `main` entry in your `package.json`. If that entry does not exist it will then default to `server.js`.

Either you can define a `main` entry that points to your entry point - for example:

```json
{
  "main": "src/index.js",
  ...
}
```

Or, you can ensure the entry point to your Express application is a `server.js` file in the root directory.

## Why does this happen?

By default when you run `npm init` it creates a `main` entry in `package.json` which points to `index.js`. Most frameworks init their entry points in files other than `index.js` in the root directory. Hence the mismatch in default behavior.
