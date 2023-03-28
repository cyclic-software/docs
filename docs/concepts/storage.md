---
sidebar_position: 4
---
# Storage

Cyclic provides object storage backed by AWS S3. Each app is provisioned with an S3 bucket and allowed read/write access. Any AWS S3-compatible client will work.

## Config

Apps running on Cyclic have environment AWS environment variables that provide access to the app's associated S3 bucket. However, you will need to provide either a `BUCKET` environment variable or set the bucket name directly in your code.

To access the bucket locally, go to the storage tab of the app, copy the credentials, and paste them on your associated command line. As with running on Cyclic, you will need to provide your code or cli the bucket name.

## Cost and Limits

The free tier includes:

- 1GB of storage per month. Additional storage is billed on a GB / month basis.
- 10GB of data transfer to the internet per month. Additional data transfer is billed on a per GB basis.

For a complete list of limits check out the [limits page](/overview/limits)

# Example

## Install

`npm install aws-sdk`

## Usage in Express

From our [S3 Storage Starter](https://github.com/cyclic-software/starter-s3-storage)

```js
const express = require('express')
const app = express()
const AWS = require("aws-sdk");
const s3 = new AWS.S3()
const bodyParser = require('body-parser');

app.use(bodyParser.json())

// curl -i https://some-app.cyclic.app/myFile.txt
app.get('*', async (req,res) => {
  let filename = req.path.slice(1)

  try {
    let s3File = await s3.getObject({
      Bucket: process.env.BUCKET,
      Key: filename,
    }).promise()

    res.set('Content-type', s3File.ContentType)
    res.send(s3File.Body.toString()).end()
  } catch (error) {
    if (error.code === 'NoSuchKey') {
      console.log(`No such key ${filename}`)
      res.sendStatus(404).end()
    } else {
      console.log(error)
      res.sendStatus(500).end()
    }
  }
})


// curl -i -XPUT --data '{"k1":"value 1", "k2": "value 2"}' -H 'Content-type: application/json' https://some-app.cyclic.app/myFile.txt
app.put('*', async (req,res) => {
  let filename = req.path.slice(1)

  console.log(typeof req.body)

  await s3.putObject({
    Body: JSON.stringify(req.body),
    Bucket: process.env.BUCKET,
    Key: filename,
  }).promise()

  res.set('Content-type', 'text/plain')
  res.send('ok').end()
})

// curl -i -XDELETE https://some-app.cyclic.app/myFile.txt
app.delete('*', async (req,res) => {
  let filename = req.path.slice(1)

  await s3.deleteObject({
    Bucket: process.env.BUCKET,
    Key: filename,
  }).promise()

  res.set('Content-type', 'text/plain')
  res.send('ok').end()
})

// /////////////////////////////////////////////////////////////////////////////
// Catch all handlers for all other requests.
app.use('*', (req,res) => {
  res.sendStatus(404).end()
})

// /////////////////////////////////////////////////////////////////////////////
// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`index.js listening at http://localhost:${port}`)
})
```
