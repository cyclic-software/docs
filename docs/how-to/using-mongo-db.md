---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 3
---

# Using MongoDB

## Atlas Configuration
Cyclic apps do not have static IP's for white listing with Atlas and Cyclic does not offer private networking on free tier.

Setting `0.0.0.0/0` will enable access to your service cluster from all IP's and make it possible for services to authenticate via connection string.


## Connections in a Serverless Runtime

MongoDB is not an on-demand database and its connection mechanism is persistent, it can also take a moment to establish the connection for the first time. For best performance, avoid making a connection inside a route handler.

- Serverless environments are restarted frequently, often right when a request is made. 
- A route handler may already be trying to serve the request before the `MongoClient.connect` method finishes connecting.
-  This may result in a failure to respond from the server. 

This behavior is possible in traditional long-running environments but occurs much less often  because the connection event happens only when the server is restarted. 



:::tip Listen for requests after mongo has connected
MongoDB connections should be established before a server's `listen` method is called. To make sure this happens every time, call the `listen` method in the connect callback. 
:::

## Connection Example MongoClient

:::caution  MongoClient connection in a serverless runtime
It is very important to make sure the `MongoClient.connect` is finished before allowing your app to serve requests. 
:::

This example does not start listening to `PORT` until the DB connection is established. Requests will be held in the Cyclic runtime to make sure none are ever missed, even if the connection takes a moment.

```javascript

const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

const uri = process.env.MONGO_CONNECTION_STRING;
const client = new MongoClient(uri);

app.get("/items/:my_item", async (req, res) => {
    let my_item = req.params.my_item;
    let item = await client.db("my_db")
                .collection("my_collection")
                .findOne({my_item: my_item})

    return res.json(item)
})

client.connect(err => {
    if(err){ console.error(err); return false;}
    // connection to mongo is successful, listen for requests
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
});

```


## Connection Example Mongoose

:::caution  MongoClient connection in a serverless runtime
It is very important to make sure that `mongoose.connect` is finished before allowing your app to serve requests. 
:::

This example does not start listening to `PORT` until the DB connection is established. Requests will be held in the Cyclic runtime to make sure none are ever missed, even if the connection takes a moment.


```javascript
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//Routes go here
app.all('*', (req,res) => {
    res.json({"every thing":"is awesome"})
})

//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})
```
