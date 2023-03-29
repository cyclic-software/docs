---
sidebar_position: 3
---

# Creating routes to create and replace data

<p align="center"><img alt="Two HTTP routes: create bike and update bike." src="/img/tutorial/rest-api/POST__PUT_Routes.png" width="640" /></p>

Our API is now given the ability to fetch data in a variety of ways, but it wouldn't be complete if we weren't able to create and replace new and existing items.

## Creating a new bike

Our RESTful API should have an endpoint that accepts bike data, with *all* of its fields except for the ID and handle, which will be both automatically generated within our server.

It's worth noting that POST body data can be in a variety of data types, hinted in the [`Accept`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) HTTP header. But having declared `app.use(express.json())` in our `index.js` file (it already came with the starter), we can directly access the body data in JSON format by extracting it from the `req.body` property.

```javascript
// Post new bike
router.post("/", authenticateUser, async (req, res) => {
  const bikeData = req.body;
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

Then, it's critical to validate this data. Instead of checking the existence of every field and its value, we can use [`runtypes`](https://www.npmjs.com/package/runtypes),  yet another library whose purpose is to conveniently check the fields of an object.

```javascript
import { Record, String, Number, Boolean } from "runtypes";

// Type for new bikes
const Money = Record({
  amount: Number,
  currencyCode: String,
});
const PriceRange = Record({
  minPrice: Money,
  maxPrice: Money,
});
const BikeData = Record({
  title: String,
  productType: String,
  createdAt: String,
  description: String,
  vendor: String,
  availableForSale: Boolean,
  totalInventory: Number,
  priceRange: PriceRange,
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

We can now check the validity of our data by calling one simple method:

```javascript
// Create new bike
router.post("/", async (req, res) => {
  const bikeId = req.params.id;
  const bikeData = req.body;

  try {
    // Make sure bike data exists
    if (!req.body) {
      throw new Error();
    }

    // Make sure bike data contains all required fields
    const bikeObject = BikeData.check(bikeData);
  } catch (e) {
    console.log(`POST /bikes/`, e.message);
    res.sendStatus(400);
  }
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

And before saving this data, we must generate its ID and handle. We'll do the former using [`uuid`](https://www.npmjs.com/package/uuid), a JavaScript library that generates `Universally Unique IDentifiers`, which are guaranteed to be unique every time. The latter, however, will be done using [`slugify`](https://www.npmjs.com/package/slugify), a function that strips text from spaces and replaces it with dashes instead: "Mountains Bike" ↦ "Mountains-Bike".





```javascript
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";

// Generate ID and Handle for bike
const bikeId = uuidv4();
const bikeHandle = slugify(bikeObject.title).toLowerCase();

// Create full bike object
const bike = {
  ...bikeObject,
  id: bikeId,
  handle: bikeHandle,
};
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

And the last step of course is to save this data and send it back to the client. This time, the client will receive a bike object with the ID and handle included:

```javascript
// Save bike object
await bikesCollection.set(bikeId, bike);

res.send(bike);
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

Let's try it out! We'll use `cURL` to read `request.json` as body data by prefixing it with an @ symbol.

```json
// request.json (remove this line from the actual file!)
{
  "productType": "Hybrid Bicycle",
  "createdAt": "Fri Jan 28 2022 03:13:24 GMT+0100 (GMT+02:00)",
  "vendor": "Audi",
  "totalInventory": 2,
  "availableForSale": false,
  "priceRange": {
    "minPrice": {
      "currencyCode": "USD",
      "amount": 1160
    },
    "maxPrice": {
      "currencyCode": "USD",
      "amount": 1624
    }
  },
  "description": "Autem ipsam quasi omnis ut. Et officiis quia. Sed quaerat pariatur nihil nobis est quos earum quidem.",
  "title": "Hybrid Bicycle Sentra"
}
```

```bash
curl -H "Content-Type: application/json" http://localhost:3000/bikes/ -d @request.json | jq .
```
<p align="center"><img alt="Response to the last command." src="/img/tutorial/rest-api/http-post.svg" width="640" /></p>

## Replacing a bike item

Another common RESTful API endpoint that we must implement is PUT, whose purpose is to replace a bike item instead of creating it. This time, the ID and handle will be already provided, so we don't have to do much instead of validating the data.

```javascript
// Update entire bike
router.put("/:id", async (req, res) => {
  const bikeId = req.params.id;
  const bikeData = req.body;

  try {
    // Make sure bike data exists
    if (!req.body) {
      throw new Error();
    }

    // Make sure bike has ID and handle
    if (!bikeData.id || !bikeData.handle) {
      throw new Error();
    }

    // Make sure bike data contains all required fields
    const bikeObject = BikeData.check(bikeData);

    // Delete existing bike object
    await bikesCollection.delete(bikeId);

    // Save new bike object
    await bikesCollection.set(bikeId, bikeObject);

    res.send(bikeObject);
  } catch (e) {
    console.log(`PUT bikes/${bikeId}`, e.message);
    res.sendStatus(404);
  }
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

What we're doing here is first checking if the bike item exists by retrieving its ID, and we're then validating the data, deleting the existing item, and replacing it with a new item.

```json
// request.json (remove this line from the actual file!)
{
  "productType": "Hybrid Bicycle",
  "createdAt": "Fri Jan 28 2022 03:13:24 GMT+0100 (GMT+02:00)",
  "vendor": "Audi",
  "totalInventory": 2,
  "availableForSale": false,
  "priceRange": {
    "minPrice": {
      "currencyCode": "USD",
      "amount": 1160
    },
    "maxPrice": {
      "currencyCode": "USD",
      "amount": 1624
    }
  },
  "description": "Autem ipsam quasi omnis ut. Et officiis quia. Sed quaerat pariatur nihil nobis est quos earum quidem.",
  "title": "Hybrid Bicycle Sentra",
  "id": "4139c5ae-b83d-4a0c-9b75-12d182aaed7c",
  "handle": "hybrid-bicycle-sentra"
}
```

```bash
curl -X PUT -H "Content-Type: application/json" http://localhost:3000/bikes/<ID> -d @request.json | jq . # replace <ID> with an ID from the response to /all
```
<p align="center"><img alt="Response to the last command." src="/img/tutorial/rest-api/http-put.svg" width="640" /></p>

In the [next part](./part-4) of this series, we'll build the functionality that allows our API to delete and update data in the bikes database.