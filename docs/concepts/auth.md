---
sidebar_position: 2
---
# Auth

Cyclic allows you to add authentication to secure parts of your api with a simple toggle. When Auth is turned on, requests are validated at the runtime layer before they are passed off to your application code.

:::tip  Turn auth on with a toggle switch
This feature is available on all apps configuration pages in the `Auth` tab
:::

Authentication and authorization can be very complex. At some point applications may require role and attribute based access control, groups and groups of groups, etc. Cyclic's auth intends to cover applications with less complex access control scenarios to enable you to gradually build more complex mechanisms while the app stays secure. 

## Use Cases
Add API Auth to your endpoints to protect the entire app or individual paths or pages.
- Password protect components such as admin pages in the browser
- Microservice backend-backend authentication

## Route Patterns
Use express router path syntax to define path patterns for which to enable auth with corresponding authentication schemes. This includes wildcard characters like <code>*</code> and <code>?</code>. <a href="https://www.npmjs.com/package/path-to-regexp" target="_blank">Read more</a> to understand the syntax in detail.

:::tip  Route Patterns with Express Syntax
When enabled, Auth is required on requests whenever a certain URL pattern is matched. This applies to all HTTP methods at those paths.
:::

- pattern `/page` will enable auth at the path `https://sample-app.cyclic.app/page` but still allow access to other routes
- pattern `/page*` will enable auth at all paths starting with `/page` but allow access to others, for example:
  - auth required on `/page/image.jpeg` or `/pages` but not required on `/other`
- pattern `/*` will enable auth for all routes

## Credentials  
  ### Basic Auth Scheme
  Apps can be configured with basic username/password credentials. These credentials will be required for route patterns that specify the `Basic` auth scheme.
  - In the browser, users will be prompted to enter a username and password into a prompt popup.
  - For direct API calls to authenticated routes outside the browser:
    - An `Authorization` header must be provided with the value of the username and password joined with a `:` and base64 encoded - `Basic {base64(username:password)}`. 
    - Example browser request: 
      ```js
      fetch("https://sample-app.cyclic.app/page", {
        "headers": {
          "Authorization": `Basic ${btoa('username:password')}`,
        },
        "method": "GET"
      });
      ``` 
    - Example Node.js request:
      ```js
      axios.get('https://httpbin.org/get', {
        headers: {
          'Authorization': `Basic ${Buffer.from('username:password').toString('base64')}`
        }
      });
      
      ```
  - <a href="https://swagger.io/specification/authentication/basic-authentication/" target="_blank">Read more</a> to understand basic auth in detail.
  
## Limits
- Currently only `Basic` auth scheme is available with others coming soon
- The number of credentials is limited to `3` per app
- The number of route patterns is limited to `3` per app

## Example

- Enable auth for your app as explained above.
- Encode username and password using online base64 encoder or bash: `echo -n 'username:password' | base64`
- Use base64 encoded string in Authorization header:
```shell
curl -H "Authorization: Basic $(echo -n 'username:password' | base64)" https://app-url.cyclic.app
```
