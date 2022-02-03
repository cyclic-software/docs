---
sidebar_position: 2
---
# Auth

Cyclic allows you to add authentication to secure parts of your api with a simple toggle. When Auth is turned on, requests are validated at the runtime layer before they are passed off to your application code.

:::tip  Turn auth on with a toggle switch
This feature is available on all apps configuration pages in the `Auth` tab
:::

Authentication and authorization can be very complex. At some point applications may require role and resource based access control, groups and groups of groups, etc. Cyclic's auth intends to cover applications in earlier stages of development to enable you to gradually build more complex mechanisms while the app stays secure. 

## Use Cases
Add API Auth to your endpoints to protect the entire app or individual paths or pages.
- Password protect components such as admin pages in the browser
- Microservice Backend-Backend authentication

## Route Patterns
Use express router path syntax to define path patterns for which to enable auth. This includes wildcard characters like <code>*</code> and <code>?</code>. <a href="https://www.npmjs.com/package/path-to-regexp" target="_blank">Read more</a> to understand the syntax in detail.

:::tip  Route Patterns
When enabled, Auth is required on requests whenever a certain URL pattern is matched.
:::

- pattern `/page` will enable auth at the path `https://sample-app.cyclic.app/page` but still allow access to other routes
- pattern `/page*` will enable auth at all paths starting with page but allow access to others
- pattern `/*` will enable auth for all routes


                Requests to sdafasdf will require an Authorization header with a Basic auth token.
