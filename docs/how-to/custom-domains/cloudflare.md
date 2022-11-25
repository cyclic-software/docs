---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 2
---
# Cloudflare

Cloudflare is a widely-used free DNS provider that provides features such as DDoS mitigation and a CDN network through a reverse proxy between the website visitors and the hosting provider. Unlike manny other DNS providers, Cloudflare supports DNS records at the apex domain through a feature known as CNAME flattening. 

:::caution Cloudflare proxying
Cloudflare provides traffic proxying for A, AAAA, and  CNAME records. This makes DNS queries resolve to Cloudflare IP addresses, increasing the security and performance of the website. However, there are two important notes:
- As the _validation_ record is only used for initializing SSL certificates, it does not benefit much from proxying and **must not be proxied**.
- If proxying is enabled on the routing record, the Cloudflare `SSL/TLS` settings (in SSL/TLS > Overview) must be set to `Full` or `Full (strict)`.
:::

## Linking a domain
The process of linking a domain in Cloudflare to a Cyclic app is the same for both apex domains and subdomains. To link an example domain, `example.com`, to a Cyclic app:

1. In the Cyclic app dashboard, navigate to the _Advanced_ section.
2. Under Branding > Custom Domain, enter `example.com` in the Domain Name field.
3. Press Start to being the linking process.
4. You should see a message saying that instructions will be available in a few seconds. Press Refresh if you do not see them.
5. When they appear, the instructions should look like this:
6. <img src="/img/domains/cyclic_advanced.png" width="650px" alt="Cyclic dashboard instructions for custom domains"/>
7. In the Cloudflare dashboard for the `example.com` domain, navigate to the _DNS_ section.
8. Under `DNS management for example.com`, press _Add Record_.
9. <img src="/img/domains/cloudflare_1.png" width="650px" alt="The Add Record button in the Cloudflare DNS dashboard"/>
10. Enter the details for the validation CNAME record:
    1. Change the record type to `CNAME`.
    2. Locate the _Validation_ record name and value from the Cyclic dashboard instructions (from step 5).
    3. Copy the _Record Name_ (from the instructions) into the _Name_ section in Cloudflare.
    4. Copy the _Record Value_ (from the instructions) into the _Target_ section in Cloudflare.
    5. For this record, the traffic **must _not_ be proxied through Cloudflare** (turn off the _Proxy status_ switch).
    6. <img src="/img/domains/cloudflare_2.png" width="650px" alt="An example setup of the validation CNAME record"/>
11. Press Save to apply the record.
12. Add another record (press Add Record again) for the routing record.
13. Enter the details for the routing CNAME record:
    1. Change the record type to `CNAME`.
    2. Find the _Routing_ record name and value from the Cyclic dashboard instructions (from step 5).
    3. Copy the _Record Name_ (from the instructions) into the _Name_ section in Cloudflare.
    4. Copy the _Record Value_ (from the instructions) into the _Target_ section in Cloudflare.
    5. The traffic can be proxied through Cloudflare for this record (if so, ensure that the encryption mode in SSL/TLS > Overview is set to `Full` or `Full (strict)`).
    6. <img src="/img/domains/cloudflare_3.png" width="650px" alt="An example setup of the routing CNAME record"/>
14. Press Save to apply the record.
15. In the Cyclic dashboard, refresh and wait for a certificate to be issued (up to 15 minutes but often much less). Once the certificate is issued, a message should appear, saying `https://example.com has been validated and is active`.
