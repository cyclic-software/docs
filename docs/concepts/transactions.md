---
sidebar_position: 1
---

# Transactions

We think of a *transaction* as an encapsulation of events that compose a single unit of service for a web application. 

These events consist of an entire end-to-end lifecycle of single request handled by an app. The cyclic runtime instruments your application with tooling that captures, measures and aggregates network requests, responses, application logs, errors and exceptions to provide full visibility for each call. 

## Transaction components
Each transaction is composed of:
  - The request sent by the caller:
    - url
    - method
    - query string
    - headers
    - payload
    - source ip
    - user agent
  - App initialization output
  - App logs to console or from any loggers:
    - log payload
    - type of io `stdout`,`stderr`
  - Exceptions and runtime errors
  - The response from your application:
    - http status code
    - headers
    - payload body

## Using transactions for analysis and debugging
In a addition to the cyclic realtime log stream, transactions are a great way to understand what is happening in your application.
Transactions are available as a tab on an application view, each request to an app is presented as a request-response pair.
### Request
Given a sample request made via `curl`
  ```
  $ curl 'https://my-app.cyclic.app/?hello=world'  
  ok
  ```
The request payload can be viewed as:
  ![Transaction Request](/img/transactions/request.png "Transaction Request")
### Response
Similarly, the details of the response are viewable as:
  ![Transaction Response](/img/transactions/response.png "Transaction Response")
### Timeline
On the back end, we had a single api handler at the root `/` route implemented as:
  ```
    app.get('/',async (req, res) => {
      console.log(req.headers['user-agent'])
      console.log(Date.now())
      console.error('this is an error')
      console.log(req.query)
      res.send('ok);
    })
  ```
Cyclic presents the timeline of the logs, errors and exceptions in context of the request and response in an easy to read, syntax highlighted timeline as:
  ![Transaction Timeline](/img/transactions/history.png "Transaction Timeline")
  

## Limitations
- Cyclic currently allows viewing transactions from the last 15 minutes.
- Keyword and date filters are not yet available




<!-- 
## Error message

```code
ERROR: The main entry point defined in package.json 'index.js' does not exist.

https://docs.npmjs.com/cli/v7/configuring-npm/package-json#main
  
  "main": "index.js"

To fix do the following:
- update the entry in package.json that points to the correct file:

  "main":"./some_folder/some_file.js", 
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

By default when you run `npm init` it creates a `main` entry in `package.json` which points to `index.js`. Most frameworks init their entry points in files other than `index.js` in the root directory. Hence the mismatch in default behavior. -->
