---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 3
---

# Using MongoDB

MongoDB

## Atlas Configuration
Cyclic apps do not have static IP's for white listing with Atlas and Cyclic does not offer private networking nn free tier.

Setting `0.0.0.0/0` will enable access to your service cluster from all IP's and make it possible for services to authenticate via connection string.


## Best Practices

The following example shows the best practice of defining the MongoClient.connect function in your application's Node.js code outside the handler so it can be reused across function invocations.

