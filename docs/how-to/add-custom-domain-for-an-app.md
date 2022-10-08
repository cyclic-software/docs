---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 2
---

# Add a custom domain

Cyclic apps are given random subdomain names at first deployment. The general structure of a name is -

`some-random-words.cyclic.app`

You can customize this domain in two ways:

## Change the subdomain

To change the subdomain to something like `myproject.cyclic.app`, navigate to `Environments` and use the form in the `Custom Subdomain` panel. You will be able to select a any custom domain that hasn't already been used.

## Add a domain you own to an app

You can attach a domain you own to a Cyclic app. This requires you to create two DNS records. The first record - to verify that you own the domain so that Cyclic can request the issue of an SSL certificate. The certificates are signed by AWS and are auto-renewed as long as appropriate DNS records exist. The second record, to route requests between your domain and cyclic app.

:::caution CAA Record
   Since Cyclic delegates the issue of the SSL certificate to Amazon AWS, your DNS must allow AWS to create certs for your domain. A Certification Authority Authorization (CAA) record is used to specify which certificate authorities (CAs) are allowed to issue certificates for a domain. 
   
   For the validation to succeed, your DNS configuration must either not have any CAA records specified (allows all CA's) or include a CAA record with a value `amazon.com` or `amazonaws.com`. Refer to [AWS docs for more info](https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-caa.html).
:::


1. Request a domain on the dashboard `Advanced` > `Custom Domains` panel.
2. You will receive two DNS records to add to your registrar
   1. `CNAME` validation record that will look something like this:
   ```
   Record Name:  _xxxxxxxxxxx.your-domain.com
   Record Value: _yyyyyyyyyyy_.abcdef.acm-validations.aws
   ```
   This record is used to verify domain ownership and issue an SSL certificate for `myproject.your-domain.com` 
   
   2. `CNAME` record to point your domain at your cyclic app, something like this:
   ```
   Record Name:  myproject.your-domain.com (the domain you requested) 
   Record Value: some-random-words.cyclic.app
   ```
   This record will route traffic from your domain to your app.

Once you add the records, it will take between 2 minutes to 24 hours for the domain to be live as DNS changes take time to propagate.

:::caution Apex Domains
A domain apex is the "root" level of your domain. `your-domain.com` is the "root" level, while `www.your-domain.com` or `abc.your-domain.com` are both subdomains.

Your registrar may not support CNAME records at apex.
Many registrars support forwarding. A common practice is to register a `www` subdomain and forward apex to it.
:::

### Cloudflare

Cloudflare is a popular free DNS service that can be used to directly to create a CNAME apex record with their rewriting feature.

Two things to keep in mind if using Cloudflare:
- The validation record **should not be proxied**
- The routing record can be proxied - but if proxy is enabled on the routing record, `full end-to-end encryption` must be enabled in the Cloudflare's `SSL/TLS` settings

#### Apex Domains and `www` 
To have requests to `www.your-domain.com` to be redirected to `your-domain.com`, configure `Rules` and `Bulk Redirects` in Cloudflare. 

Refer to Cloudflare documentation:
- <a href="https://developers.cloudflare.com/pages/how-to/www-redirect/" target="_blank">Redirecting www to domain apex</a>




## Additional support 
Reach out to us for any additional support on  [<i className="fab fa-discord"></i>  Discord](https://discord.cyclic.sh/support)
