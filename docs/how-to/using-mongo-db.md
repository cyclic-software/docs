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

app.get("/items/:my_item", async (req, res) => {
    let my_item = req.params.my_item;
    let item = await client.db("my_db")
                .collection("my_collection")
                .findOne({my_item: my_item})

    return res.json(item)
})

/*
In this code, we define an async function called startServer(). 
Inside this function, we declare a variable called client, which we will use to hold our MongoDB connection. 
We then use a try/catch block to handle any errors that may occur while connecting to MongoDB.

We replace the MongoClient.connect() function call with await MongoClient.connect(), which returns a Promise that resolves to the client object. 
If an error occurs, the catch block will handle it and log the error message to the console.

If the connection is successful, we proceed with setting up our cron jobs and starting the server by calling app.listen(). 
The await keyword is not needed here, as app.listen() does not return a Promise.

Finally, we call startServer() to start the process.
*/

async function startServer() {
  let client;

  try {
    // connect to MongoDB
    client = await MongoClient.connect(process.env.MONGODB);
    console.log("Connected to MongoDB");

    const db = client.db();

    // Start server after successful MongoDB connection
    app.listen(port, () => {
      console.log(` Server listening on port ${port} ...`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

startServer();

```


## Connection Example Mongoose

:::caution  Mongoose connection in a serverless runtime
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
