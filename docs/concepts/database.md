---
sidebar_position: 4
---

# Databases

Apps have access to a pre-configured AWS DynamoDB Table. External databases can be integrated by setting their connection strings as environment variables.


## DynamoDB
An enhanced single-table database built on the fast and globally scalable DynamoDB.
On top of DynamoDB NoSQL functionality and table, there are a number of additional resources that enable features including:
- Simple Key-Value inspired SDK
- Write-Time Indexing
- Flexible Queries
- JSON Schema Discovery

:::tip  Local Dev 
When deployed Cyclic apps are directly integrated with AWS resources with no need for any additional config.
When developing and interacting with AWS locally, use credentials provided on the `Data / Storage` tab of an app.

![Transaction Request](/img/cyclic/creds.png "Transaction Request")

The credentials are temporary and expire after 60 minutes. New credentials can be retrieved by reloading the page.
:::

### Using DynamoDB with the `@cyclic.sh/dynamodb` Package

[GitHub](https://github.com/cyclic-software/dynamodb) | [NPM](https://www.npmjs.com/package/@cyclic.sh/dynamodb)

The sdk simplifies the DynamoDB interface and enables collection organization of records, queries, and data scheme discovery among other features.

### Collection Items
The package organizes items into the following structure:
```json
{
  "collection": "animals",
  "key": "luna",
  "props": {
    "updated": "2022-03-23T13:02:12.702Z",
    "created": "2022-03-23T12:32:02.526Z",
    "color": "orange",
    "type": "cat"
  },
  "$index": [
    "color"
  ]
}
```
The `key` should be used to uniquely identify an item and its set of child items.

`$index` is a list of `props` by which the item will be indexed. key-value pairs that have been indexed can be used to retrieve or query items with greater performance.

```js
// example.js

const CyclicDB = require('cyclic-dynamodb')
const db = CyclicDB(your-app-idCyclicDB) // find it on the Database/Storage tab

const run = async function(){
    let animals = db.collection('animals')

    // create an item in collection with key "leo"
    let leo = await animals.set('leo', {
        type:'cat',
        color:'orange'
    })

    // get an item at key "leo" from collection animals
    let item = await animals.get('leo')
    console.log(item)
}
run()
```
### Item Fragments
With the cyclic data model, items can have fragments. These can be thought of as children or attachments to items.

Another way to think of fragments is by thinking of an item itself as its own collection of other items that are stored closely together.

An example use case for a user record would be something like:

- item user: name, last name, id
  - fragment home: address, city
  - fragment work: company name, position, work address
Fragments objects look just like items but give you a way to better organize your data with higher query performance.

```js
let users = db.collection('users')

await users.item('mike')
        .fragment('work').set({
            company: 'cyclic'
        })

let mikes_work = await users.item('mike').fragment('work').get()
```
## Using DynamoDB Directly

If you choose not to use the open-source `cyclic-dynamodb` package, apps have CRUD access to the table and can make use of the table's generic raw schema directly. 

When using the table directly with AWS DynamoDB SDK or other third-party SDKs, the following fields and indexes can be used:

| IndexName | Partition Key | Range Key     | Projected Fields     |
|-----------|---------------|---------------|----------------------|
| primary   | `pk`          | `sk`          | all                  |
| keys_gsi  | `keys_gsi`    | `keys_gsi_sk` | `pk`,`sk`, `gsi_prj` |
| gsi_prj   | `gsi_prj`     | -             | `prj`                |


The table also has several attribute names that are reserved and should not be used directly:
`gsi1`,`gsi2`,`gsi_s`,`gsi_s_sk`,`gsi_s2`,`gsi_s2_sk`

An additional attribute `ttl` is reserved and drives record expiration as specified by standard [DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html)



