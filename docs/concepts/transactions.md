---
sidebar_position: 4
---

# Network

We think of a *network transaction* as an encapsulation of events that compose a single unit of service for a web application. 

These events consist of an entire end-to-end lifecycle of a single request handled by an app. The Cyclic runtime instruments applications with tooling that captures, measures and aggregates network requests, responses, application logs, errors and exceptions to provide full visibility for each call. 

## Network Transaction components
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
  - App logging output to console or from any loggers:
    - log payload
    - type of io `stdout`,`stderr`
  - Exceptions and runtime errors
  - The response from your application:
    - http status code
    - headers
    - payload body

## Using network transactions for analysis and debugging
In addition to the Cyclic realtime log stream, network transactions are a great way to understand what is happening in your application.
Network is available as a tab on an application view; each request to an app is presented as a request-response pair.
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
  ```js
    app.get('/',async (req, res) => {
      console.log(req.headers['user-agent'])
      console.log(Date.now())
      console.log(req.query)
      console.error('this is an error')
      return res.send('ok')
    })
  ```
Cyclic presents the timeline of the logs, errors and exceptions in context of the request and response in an easy to read, syntax highlighted timeline as:
  ![Transaction Timeline](/img/transactions/history.png "Transaction Timeline")
  

## Limitations
- Cyclic currently allows viewing network transactions from the last 7 days
- Keyword and date filters are not yet available


