---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 2
---
# Cloudflare

Cloudflare is a popular free DNS service that can be used to directly to create a CNAME apex record with their rewriting feature.

Two things to keep in mind if using Cloudflare:
- The validation record **should not be proxied**
- The routing record can be proxied - but if proxy is enabled on the routing record, `full end-to-end encryption` must be enabled in the Cloudflare `SSL/TLS` settings

## Apex Domains
Unlike many other DNS services, Cloudflare supports CNAME records at the apex domain using a feature called CNAME flattening. To link an example domain, `example.com`, to a Cyclic app:

1. In the app dashboard, navigate to Advanced > Branding > Custom Domain.
2. Enter `example.com` in the Domain Name field.
3. Press Start.
4. You should see a message saying that instructions will be available in a few seconds. Press Refresh if you do not see them.
5. The instructions should look like this:
6. <img src="/img/domains/cyclic_advanced.png" width="650px"/>
7. In the Cloudflare dashboard for the `example.com` domain, navigate to the _DNS_ section.
8. Press _Add Record_.
9. <img src="/img/domains/cloudflare_1.png" width="650px"/>
10. Enter the details for the validation CNAME record:
    1. Change the record type to `CNAME`.
    2. Find the _validation_ record name and value from the Cyclic dashboard instructions (from step 5).
    3. Copy the _Record Name_ (from the instructions) into the _Name_ section in Cloudflare.
    4. Copy the _Record Value_ (from the instructions) into the _Target_ section in Cloudflare.
    5. For this record, the traffic must _not_ be proxied through Cloudflare (turn off the _Proxy status_ switch).
    6. <img src="/img/domains/cloudflare_2.png" width="650px"/>
11. Press _Save_ to apply the record.
12. Add another record (press _Add Record_) for the routing record.
13. Enter the details for the routing CNAME record.
    1. Change the record type to `CNAME`.
    2. Find the _routing_ record name and value from the Cyclic dashboard instructions (from step 5).
    3. Copy the _Record Name_ (from the instructions) into the _Name_ section in Cloudflare.
    4. Copy the _Record Value_ (from the instructions) into the _Target_ section in Cloudflare.
    5. The traffic can be proxied through Cloudflare for this record (if so, ensure that the encryption mode in SSL/TLS > Overview is set to full).
    6. <img src="/img/domains/cloudflare_3.png" width="650px"/>
14. Press _Save_ to apply the record.
15. In the Cyclic dashboard, refresh and wait for a certificate to be issued (up to 15 minutes but often much less). Once the certificate is issued, a message will appear saying `https://example.com has been validated and is active`.

## Subdomains

Follow the above directions for apex domains, but enter the appropriate subdomain instead of the apex domain in step 2.