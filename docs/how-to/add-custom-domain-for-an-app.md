---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 2
---

# Adding a custom domain to an app

Cyclic apps are given random subdomain names at first deployment. The general structure of a name is - 

`some-random-words.cyclic.app` 

You can customize this domain in two ways:

## Change the subdomain

To change the subdomain to something like `myproject.cyclic.app` , navigate to `Environments` and use the form in the `Custom Subdomain` panel. You will be able to select a any custom domain that hasn't already been used.

## Add a domain you own to an app

You can attach a domain you own to a Cyclic app. This requires you to verify that you own you domain in order for Cyclic to request the  issue of an SSL certificate. The certificates are signed by AWS and are auto-renewed as long as appropriate DNS records exist.

1. Request a domain on the dashboard `Advanced` > `Custom Domains` panel.
2. You will receive two DNS records to add to your registrar
   1. CNAME validation record that will look something like this:
    ```
    Record Name:  _xxxxxxxxxxx.your-domain.com
    Record Value: _yyyyyyyyyyy_.abcdef.acm-validations.aws
    ```
    This record is used to verify domain ownership and issue an SSL certificate for `your-domain.com`
    2. CNAME record to point your domain at your cyclic app, something like this:
        ```
        Record Name:  myproject.your-domain.com (the domain you requested)
        Record Value: some-random-words.cyclic.app
        ```
    This record will route traffic from your domain to your app.