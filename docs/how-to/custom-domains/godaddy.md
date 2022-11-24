---
# slug: / # if you wanna drop straight into docs uncomment along with config change
sidebar_position: 3
---
# GoDaddy

Assuming you own `example.com`, registered with GoDaddy:
## Subdomains
Link a subdomain, for example `api.example.com` to a Cyclic app:


### Cyclic
1. On the app dashboard, navigate to Advanced > Branding > Custom Domain
2. Enter `api.example.com` in the _Domain Name_ field
3. Press Start
4. You should see a message saying that records will be available in a few seconds. Hit _Refresh_ if you do not see them.
5. Cyclic will produce:
   1. <img src="/img/domains/cyclic_advanced.png" width="650px"/>

### GoDaddy
1. Navigate to _DNS Management_ for the domain
2. Click _Add_ to add a record
   1. <img src="/img/domains/godaddy_1.png" width="650px"/>
3. Enter the validation record
   1.  Select `CNAME` in the _Type_ field
   2.  The _Name_ field should not include the domain portion
       1.  For the Cyclic dashboard record name of `_xxxxxxxxxxx.api.example.com`, in GoDaddy, only enter `_xxxxxxxxxxx.api`
   3.  <img src="/img/domains/godaddy_2.png" width="650px"/>
4. Enter the routing record
   1.  Select `CNAME` in the _Type_ field
   2.  The _Name_ field should not include the domain portion
       1.  For the Cyclic dashboard record name of `api.example.com`, in GoDaddy, only enter `api`
   3.  <img src="/img/domains/godaddy_3.png" width="650px"/>

At this point, the SSL certificate is still pending, navigating to your subdomain `https://api.example.com`, will produce a browser error `NET::ERR_CERT_COMMON_NAME_INVALID`. 

Return to Cyclic dashboard. It will take a few minutes (up to 15 but usually less) for a certificate to be issued once the validation record has been entered.

After refreshing, you should see a message that says: 
```
 https://api.example.com has been validated and is active 
```


## Apex domains
Link the apex domain `example.com` to a Cyclic app. 

:::caution Apex Domains cannot be linked via CNAME
   The most common approach is to link the `www` subdomain and use forwarding in GoDaddy to set up redirect from `example.com` to `www.example.com`
:::

### Cyclic
**Follow the above _subdomain_ procedure to link `www.example.com` to your Cyclic app. **

After you have set up the records and SSL certificate was issued:
- Verify that you can access your app via `https://wwww.example.com`.

### GoDaddy
1. Navigate to _DNS Management_ for the domain, scroll down to the _Forwarding_ section
2. Click _Add Forwarding_ in the _Domain_ slot
   1. <img src="/img/domains/godaddy_4.png" width="650px"/>
3. Select `https://` from the dropdown and enter your subdomain, `www.example.com` 
   1. <img src="/img/domains/godaddy_5.png" width="650px"/>

After a few minutes, try navigating to `https://example.com` and you should be redirected to your Cyclic app at `https://www.example.com`