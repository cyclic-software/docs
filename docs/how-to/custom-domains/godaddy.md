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


Return to Cyclic dashboard. It will take a few minutes (up to 15 but usually less) for a certificate to be issued once the validation record has been entered.



## Apex domains

