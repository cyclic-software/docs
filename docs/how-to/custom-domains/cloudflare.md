---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 2
---
# Cloudflare

Cloudflare is a widely-used free DNS provider that provides features such as DDoS mitigation and a CDN network through a reverse proxy between the website visitors and the hosting provider. Unlike manny other DNS providers, Cloudflare supports DNS records at the apex domain through a feature known as CNAME flattening. 

:::caution Cloudflare proxying
Cloudflare provides traffic proxying for A, AAAA, and CNAME records. When this option is enabled, DNS queries for resolve to Cloudflare IP addresses, increasing the security and performance of the website. However, there are two important notes:
- As the _validation_ record is only used for initializing and renewing SSL certificates, it does not benefit much from proxying and **must not be proxied**.
- If proxying is enabled on the routing record, the Cloudflare _SSL/TLS_ settings (in SSL/TLS > Overview) must be set to _Full_ or _Full (strict)_.
:::

## Linking a domain
The process of linking a domain in Cloudflare to a Cyclic app is the same for both apex domains and subdomains. To link an example domain, `example.com`, to a Cyclic app:

1. In the Cyclic app dashboard, navigate to the _Advanced_ section.
2. Under Branding > Custom Domain, enter `example.com` in the Domain Name field.
3. Press Start to being the linking process.
4. You should see a message saying that instructions will be available in a few seconds. Press _Refresh_ if you do not see them.
5. When they appear, the instructions should look like this:
6. <img src="/img/domains/cyclic_advanced.png" width="650px" alt="Example Cyclic dashboard instructions for custom domains. It should contain a '1. Validation Record' section, containing details for the validation record, and a '2. Routing Record' section, containing details for the routing record."/>
7. Open the Cloudflare dashboard for the `example.com` domain, and navigate to DNS > Records.
8. Under the section _DNS management for example.com_, press _Add Record_.
9. <img src="/img/domains/cloudflare_1.png" width="650px" alt="The Add Record button in the Cloudflare DNS management dashboard"/>
10. Enter the details for the validation CNAME record:
    1. Select `CNAME` in the _Type_ field.
    2. Locate the name and value for the _Validation_ record from the Cyclic dashboard instructions (step 5).
    3. Copy the _Record Name_ (from the instructions) into the _Name_ section in Cloudflare.
    4. Copy the _Record Value_ (from the instructions) into the _Target_ section in Cloudflare.
    5. For this record, the traffic **must _not_ be proxied through Cloudflare** (turn off the _Proxy status_ switch).
    6. <img src="/img/domains/cloudflare_2.png" width="650px" alt="An example setup of the validation CNAME record"/>
11. Press _Save_ to save and apply the record.
12. Add another record (press _Add Record_ again) for the routing record.
13. Enter the details for the routing CNAME record:
    1. Select `CNAME` in the _Type_ field.
    2. Locate the name and value for the _Routing_ record from the Cyclic dashboard instructions (step 5).
    3. Copy the _Record Name_ (from the instructions) into the _Name_ section in Cloudflare.
    4. Copy the _Record Value_ (from the instructions) into the _Target_ section in Cloudflare.
    5. The traffic can be proxied through Cloudflare for this record (if enabled, navigate to SSL/TLS > Overview in the Cloudflare dashboard, and set the encryption mode to `Full` or `Full (strict)`).
    6. <img src="/img/domains/cloudflare_3.png" width="650px" alt="An example setup of the routing CNAME record"/>
14. Press _Save_ to save and apply the record.
15. In the Cyclic dashboard, refresh and wait for a certificate to be issued (up to 15 minutes but usually much faster). Once the certificate is issued, a message should appear, saying `https://example.com has been validated and is active`, and the domain will be successfully linked to the Cyclic app.
