---
sidebar_position: 2
---

# Creating routes to fetch and search data

<p align="center"><img alt="Four HTTP GET routes: list all, get by id, get by handle, and search by title." src="/img/tutorial/rest-api/GET_Routes.png" width="640" /></p>

With our database full with data, it's time to build a RESTful API that allows us to fetch that data in four different ways:

1. GET all bikes
2. GET bike by ID
3. GET bike by handle
4. GET bikes by search query

Get started by creating a `router.js` file. This file will contain and export an Express **Router** (the entity that handles URLs with different HTTP verbs), processes them, and returns a response. This entire process is customizable by us, the programmers of the HTTP server.

```javascript
// router.js

import { Router } from "express";

// Initialize Express router
export const router = Router();
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

We can now use the `router` object to define a variety of HTTP request handlers for this server. But to make it work, we must attach it to the `index.js` file, which is executed by Cyclic when the server is first started using `npm run dev`:

```javascript
// index.js

import { router as bikesRouter } from "./router.js"; // this is the new import

import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/bikes", bikesRouter); // this is the new line

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// delete all other lines after this
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/index.js)

This implies that all URL paths that begin with `/bikes` will be handled by the router defined in the `router.js` script. (e.g `/bikes/all`, `/bikes`, …)

## Fetching all bikes

Our very first route handler is pretty simple: it's a handler for the `/bikes/all` URL with the GET action, always returning a list of *all* bikes in the database.

:::tip
In large APIs that depend on huge databases (such as Instagram and Twitter), it's common to see support for [pagination](https://developer.atlassian.com/server/confluence/pagination-in-the-rest-api/), a feature that allows the API's users to only fetch part of the database. (since it's nearly impossible to return a list of one million items in just one HTTP response, for example.)
:::

We haven't created a route handler, yet. Thankfully, all of them generally follow the same pattern:

```javascript
router.get("/all", async (req, res) => {
  res.send([]);
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

As you can see, we're telling Express to handle the GET action on the `/all` route by running the `router.get` method. If we wished to support the POST action instead for example, we would do `router.post`, as we'll see in the next section of this guide.

Route handlers also take a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) as their second parameter; that's a function that takes two parameters itself:

- **HTTP Request:** as the first parameter passed to this function (which we conveniently named `req`), it's an object that contains all kinds of information about the HTTP request including but not limited to the query strings, body data and even HTTP headers.
- **HTTP Response:** this is the second parameter, and it's used to fill the HTTP response with some information before sending it back to the client using the `res.send` method. For now, we're simply returning an empty `Array`, but we'll soon populate it with bikes data.

And notice how we're using an [asynchronous function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) as the callback. While not required, it's important to note that it's well-supported with Express and we'll be using it to wait for DynamoDB to return its data. Of course, we could also use [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) instead.

It's time to start making calls to our DynamoDB instance to actually fetch some data. Let's get started by creating an instance of our bikes collection, giving us access to a variety of methods for manipulating our database:

```javascript
// Initialize AWS DynamoDB
const db = DynamoDb(process.env.CYCLIC_DB);
const bikesCollection = db.collection("bikes");
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

As you can see, we're using the `cyclic-dynamodb` library to create a programmable instance of our database. That's a convenience library used to facilitate the communication with our database using simple JavaScript code. We're also extracting the `CYCLIC_DB` environment variable that we set earlier using `process.env`. 

Let's move back into our route handler to finally make some use of this `bikesCollection` object:

```javascript
// Get all bikes
router.get("/all", async (req, res) => {
  const { results: bikesMetadata } = await bikesCollection.list();

  const bikes = await Promise.all(
    bikesMetadata.map(async ({ key }) => (await bikesCollection.get(key)).props)
  );

  res.send(bikes);
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

Let's dissect the above code snippet line-by-line:

1. We're calling the asynchronous `list()` method that returns an object containing the results field. Being the only interesting field, we're directly extracting it using JavaScript [Destructing Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) and renaming it to `bikesMetadata`. This final object, however, does not contain the bike's data; it's only giving us the IDs (or "Keys") of those bikes.
    
    ```javascript
    const { results: bikesMetadata } = await bikesCollection.list();
    // bikesMetadata = [
    // { key: '...' },
    // { key: '...' },
    // ]
    ```
    
2. We're iterating over every bike key and using the asynchronous `get()` method to fetch the *actual* bike data, stored in the props field. The result is an array of Promises, which we await to all be resolved using the `Promise.all` method.
    
    ```javascript
    const bikes = await Promise.all(
      bikesMetadata.map(
        async ({ key }) =>
          (
            await bikesCollection.get(key)
          ).props // { props: { ... } }
      ) // { title, inStock, ... } (actually a Promise!)
    );
    ```
    
3. We're finally sending an array of bike data back in the HTTP response. 

All looking good! Since our server is automatically restarted when we change our code (a consequence of running [`nodemon`](https://www.npmjs.com/package/nodemon)), we can directly go debug it using `cURL`:

```bash
curl http://localhost:3000/bikes/all | jq .
```
<p align="center"><img alt="Response to the last command." src="/img/tutorial/rest-api/api-all.svg" width="640" /></p>

## Fetching a bike by ID

We just figured out how to fetch a full list of bikes using DynamoDB, but within that piece of code, we nested a little snippet that fetched a bike using its ID (or key):

```javascript
await bikesCollection.get(key).props;
```

We'll be using that command to build the remainder of this route. But first of all, it's important to first model our URL. Since our API follows the REST standard, it's best practice to name it like the following: `/bikes/<ID>`. As you can see, the ID is encoded directly in the URL itself, so how do we tell Express to extract this specific part of the URL?

The answer is relatively simple: when using Express, all we have to do is simply replace the dynamic part of the URL with a colon and give it a name.

```javascript
// Get bike by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

As you can see, we're inserting `:id` into our URL and proceed to extract it from the `req.params` object.

With the ID now in our hands, we can use that code snippet we just saw to extract specific data from DynamoDB:

```javascript
// Get bike by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const { props: bike } = await bikesCollection.get(id);
  res.send(bike);
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

Let's test that:

```bash
curl http://localhost:3000/bikes/<ID> | jq . # replace <ID> with an ID from the response to /all
```
<p align="center"><img alt="Response to the last command." src="/img/tutorial/rest-api/http-get-id.svg" width="640" /></p>

But what if the item with that ID doesn't exist? In that case, we wish to return an HTTP response with the 404 status code, indicating that the resource does not exist.

```javascript
// Get bike by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const { props: bike } = await bikesCollection.get(id);
    res.send(bike);
  } catch (e) {
    console.log(`GET /${id}`, e.message);
    res.sendStatus(404);
  }
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

Let's see if that works: 

```bash
curl http://localhost:3000/bikes/blahblah
```
<p align="center"><img alt="Response to the last command." src="/img/tutorial/rest-api/api-blahblah.svg" width="640" /></p>

## Fetching a bike by handle

Okay, so we're using IDs to index our bike items. But they're just a random mix of numbers and letters, designed to generate a unique ID per item.

The alternative is "handles", [slugified](https://developer.mozilla.org/en-US/docs/Glossary/Slug) versions of the title that are still unique.

Let's extract them from the route:

```javascript
// Get bike by handle
router.get("/by-handle/:handle", async (req, res) => {
  const handle = req.params.handle;
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

We can't just run the `get()` method this time, since we don't have the item's key.

One thing we could do, of course, is to get a list of every bike item and check the handle of each one. That, however, is not very efficient.

Thankfully, we can use Cyclic's DynamoDB object to **filter** the bike items and only keep the ones that match our handle:

```javascript
const { results } = await bikesCollection.filter({ handle });
```

This method, unlike `list()`, returns the full data for each found item. Let's extract our bike's data and send it back to the client:

```javascript
// Get bike by handle
router.get("/by-handle/:handle", async (req, res) => {
  const handle = req.params.handle;

  const { results } = await bikesCollection.filter({ handle });
  const { props: bike } = results[0];

  res.send(bike);
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

And let's not forget to do some error handling in case no bike object matches that particular handle. That's tested by checking the truthiness of `results.length`, returning `False` when it's an empty array.

```javascript
// Get bike by handle
router.get("/by-handle/:handle", async (req, res) => {
  const handle = req.params.handle;

  try {
    const { results } = await bikesCollection.filter({ handle });
    if (!results.length) throw new Error();

    const { props: bike } = results[0];
    res.send(bike);
  } catch (e) {
    console.log(`GET /bikes/by-handle/${handle}`, e.message);
    res.sendStatus(404);
  }
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

And of course, we should always battle-test our API before shipping it to the Internet:

```bash
curl http://localhost:3000/bikes/by-handle/<HANDLE> | jq . # replace <HANDLE> with a handle from the response to /all
```
<p align="center"><img alt="Response to the last command." src="/img/tutorial/rest-api/api-handle.svg" width="640" /></p>

## Fetching bikes by search on title

Search is one of the most important features in a website. It's how users discover new products without having to browse a list of hundreds or even thousands of items. Implementing it, however, is not so simple.

The most popular search engines have to take a plethora of things into account: ignoring pronouns and uppercase characters, handling misspelled words, etc…

In fact, DynamoDB comes with full support for [ElasticSearch](https://aws.amazon.com/about-aws/whats-new/2015/08/amazon-dynamodb-elasticsearch-integration/), a powerful search engine developed  used by some of the biggest applications out there.

But for the purposes of this tutorial, we'll stick with something more simple. DynamoDB also supports scans: SQL-like querying that handles many powerful [expressions](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/scan.html).

Scans take-in expressions: powerful combinations of built-in commands, such as **`contains`**. That's a command that facilitates the ability to check whether one of an item's fields *contains* a string of characters. Unfortunately, it does not support any advanced search-like features such as ignoring uppercase or lowercase characters, but it's useful enough for a simple application.

But before we delve deeper into DynamoDB Scans, let's write the fundamentals of our new router.

We'll be using query strings this time, also called **GET parameters**.

They simply are key-value pairs encoded in the right-hand side of a URL in the following manner: `/bikes/search/by-title?term=<QUERY>` (in this case, "term" is the GET parameter with the value  `<TERM>`)

```javascript
// Search bikes by title
router.get("/search/by-title", async (req, res) => {
  const term = req.query.term || "";
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

Let's proceed now by using this search term to look-up some data. The function that we're looking for is `parallel_scan`, taking the expression `contains(title, <TERM>)`. However, we must split this expression into its three parts:

1. **The expression itself:** `contains()`
2. **The attribute name:** `title`
3. **The attribute value:** `<TERM>`

We can combine these 3 parts into one by replacing the attribute name with `#title` and its value with `:value`, we can then replace these placeholders with the real values:

```javascript
const { results } = await bikesCollection.parallel_scan({
  expression: "contains(#title, :title)",
  attr_names: {
    "#title": "title",
  },
  attr_vals: {
    ":title": query,
  },
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

Let's see how that fits into the router code:

```javascript
// Search bikes by title
router.get("/search/by-title", async (req, res) => {
  const query = req.query.query || "";

  const { results } = await bikesCollection.parallel_scan({
    expression: "contains(#title, :title)",
    attr_names: {
      "#title": "title",
    },
    attr_vals: {
      ":title": query,
    },
  });

  const bikes = results.map(({ props }) => props);
  res.send(bikes);
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

And with the same error handling, it's even more robust:

```javascript
// Search bikes by title
router.get("/search/by-title", async (req, res) => {
  const query = req.query.query || "";

  try {
    const { results } = await bikesCollection.parallel_scan({
      expression: "contains(#title, :title)",
      attr_names: {
        "#title": "title",
      },
      attr_vals: {
        ":title": query,
      },
    });

    const bikes = results.map(({ props }) => props);
    res.send(bikes);
  } catch (e) {
    console.log(`GET /bikes/search/by-title term="${query}"`, e.message);
    res.sendStatus(400);
  }
});
```

[Link to full code.](https://github.com/cyclic-software/tutorial-bikes-api/blob/main/router.js)

Let's try it out! Make a search with the term "Bicycle" (case-sensitive) and see the results:

```bash
curl http://localhost:3000/bikes/search/by-title\?query\=Bicycle | jq .
```
<p align="center"><img alt="Response to the last command." src="/img/tutorial/rest-api/api-search.svg" width="640" /></p>

In the [next part](./part-3) of this series, we'll add more functionality that gives us the ability to create and replace data in the bikes database.