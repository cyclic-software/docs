---
sidebar_position: 4
---
# Storage

Cyclic provides object storage backed by AWS S3. Each app is provisioned with an S3 bucket and allowed read/write access. Any AWS S3 compatible client will work.

## Config

Apps running on Cyclic have environment AWS environment variables that provide for access to the app's associated S3 bucket. However, you will need to provide either a `BUCKET` environment variable or set the bucket name directly in your code.

To access the bucket from local, go to the storage tab of the app, copy credentials and paste on your associated command line. As with running on Cyclic you will need to provide your code or cli the bucket name.

## Cost and Limits

The free tier includes:

- 1GB of storage per month. Additional storage is billed on a GB / month basis.
- 10GB of data transfer to the internet per month. Additional data transfer is billed on a per GB basis.
