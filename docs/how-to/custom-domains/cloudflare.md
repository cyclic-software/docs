---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 2
---
# Cloudflare

Cloudflare is a popular free DNS service that can be used to directly to create a CNAME apex record with their rewriting feature.

Two things to keep in mind if using Cloudflare:
- The validation record **should not be proxied**
- The routing record can be proxied - but if proxy is enabled on the routing record, `full end-to-end encryption` must be enabled in the Cloudflare's `SSL/TLS` settings

## Apex Domains and `www` 
To have requests to `www.your-domain.com` to be redirected to `your-domain.com`, configure `Rules` and `Bulk Redirects` in Cloudflare. 

Refer to Cloudflare documentation:
- <a href="https://developers.cloudflare.com/pages/how-to/www-redirect/" target="_blank">Redirecting www to domain apex</a>


