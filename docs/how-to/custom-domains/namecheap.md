---
sidebar_position: 3
---

# Namecheap

Namecheap is one of the most popular domain registrars but can trip up first-time users when setting their configuration. Here are some basic instructions.

### Generating your Cyclic DNS records

1. Navigate to the Advanced tab in the application you want to link your custom domain to. 
2. Enter your domain name in the "Domain Name" field, ex. ```mydomainiscool.com```
3. If your domain was purchased with a ```www``` or other prefix, make sure to include it, otherwise you will have to reissue your records.
4. Within a minute, you can refresh the page, and your records will be available below.
5. If you need to cancel and restart for any reason, just hit the "Cancel Request" button.
6. Once Cyclic has issued a DNS record for your domain, you will see a pink highlighted box appear below. There are two sections within this box: Validation Record and Routing Record.

Follow the instructions below to use this information to connect to Namecheap.

### Connecting to Namecheap

### Apex Domains

Apex domains are top level domains and do not include a prefix such as ```www``` or ```api``` before the defining text of the domain name. If you purchased an apex domain from Namecheap, follow these instructions to connect it.

1. In Namecheap, first use your Validation Record to create a CNAME record.
   1. In Namecheap, select __Domain List__ from the sidebar and click the __Manage__ button next to your domain.
   2. Select the __Advanced DNS__ tab at the top of the page and hit the __Add New Record Button__ for each record you need to add.
   3. The "Record Name/Host" information will tack on your domain name again if it is already included. So when you set up a CNAME record, it is crucial to ONLY insert the alphanumeric portion of the Name/Host prior to the first period. 
      1. ![](/img/domains/apeximg.png)
   4. Adding a CNAME record with the host of ```*``` and the Value of your Cyclic URL is recommended, as the ```*``` is a universal redirect.
2. Next, you can create URL Redirect Records.
   1. You can use ```*```, ```@```, and ```www``` to create URL redirect records on Namecheap. 
   2. Include the appropriate symbol above in the Host column and your complete custom URL in the Value column (ex. "https://mydomainiscool.com")
      1. Failure to include ```http://``` or ```https://``` could cause your redirect to fail.

### Subdomains

If your custom domain starts with a prefix such as ```www``` or ```shop``` double check that you included the prefix in your DNS record request in your Cyclic dashboard. Continue with these instructions to connect your domain name to Namecheap

1. In Namecheap, first use your Validation Record to create a CNAME record.
   1. In Namecheap, select __Domain List__ from the sidebar and click the __Manage__ button next to your domain.
   2. Select the __Advanced DNS__ tab at the top of the page and hit the __Add New Record Button__ for each record you need to add.
   3. The "Record Name/Host" information will tack on the apex portion of your domain name again if it is already included. So when you set up a CNAME record, it is crucial to insert the alphanumeric portion of the Name/Host prior to the first period plus the prefix, in most cases ```www```. 
      1. Ex. ```_75d18c39a91766ee704a49763bfd3bfb.www``` 
      2. ![](/img/domains/subdomimg.png)
   4. Since you have a domain with a leading prefix such as ```www```, you will need to add a CNAME where the Host is only ```www``` and the Value is your Cyclic URL (ex. nice-lion-pants.cyclic.app).
   5. Adding a CNAME record with the host of ```*``` and the Value of your Cyclic URL is recommended, as the ```*``` is a universal redirect.
2. You can use ```*```, ```@```, and ```www``` to create URL redirect records on Namecheap.
   1.  Include the appropriate symbol above in the Host column and your complete custom URL in the Value column (ex. "https://www.mydomainiscool.com")
   2. Failure to include ```http://``` or ```https://``` could cause your redirect to fail.


