---
sidebar_position: 2
---
# Auth

Cyclic allows you to add authentication to secure parts of your api with a simple toggle. When Auth is turned on, requests are validated before they are passed off to your application code.



Add API Auth to your endpoints to protect your entire app or individual paths or pages.
              <br/>
              Great use cases for Simple API Auth are:
              <ul>
                <li>to secure components such admin pages </li>
                <li>to secure API for backend to backend applications</li>
              </ul>


               Auth will be applied to matching routes on your api.
                 Express-style path syntax is supported including wildcard characters like <code>*</code> and <code>?</code>.
                <br>
                For example:
                <ul>
                <li><strong>Pattern:</strong> <code>/admin/*</code> with a <code>Basic</code> auth scheme: 
                <br>
                <strong>Result:</strong> Users prompted for credentials at routes starting with <code>/admin</code> but able to access others.</li>
                </ul>
                Read more about routes: <a href="https://docs.cyclic.sh/docs/concepts/auth" target="_blank">Docs</a>

                Requests to sdafasdf will require an Authorization header with a Basic auth token.
