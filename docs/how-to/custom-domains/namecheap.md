---
sidebar_position: 3
---

# Namecheap

Namecheap is one of the most popular domain registrars but can trip up first-time users when setting their configuration. Here are some basic instructions.

### Generating your Cyclic DNS records

1. Navigate to the Advanced tab in the application you want to link your custom domain to. 
2. Enter your domain name in the "Domain Name" field, ex. ```www.mydomainiscool.com```
   ![](/img/domains/customdomain.png)
3. Even if your domain was purchased as an apex domain (without a ```www``` prefix) include the ```www``` prefix to make sure it points correctly.
4. Within a minute, you can refresh the page, and your records will be available below.
5. If you need to cancel and restart for any reason, just hit the "Cancel Request" button.
   ![](/img/domains/cancelrequest.png)
6. Once Cyclic has issued a DNS record for your domain, you will see a pink highlighted box appear below. There are two sections within this box: Validation Record and Routing Record.
   ![](/img/domains/dnsrecords.png)

Follow the instructions below to use this information to connect to Namecheap.

### Connecting to Namecheap

1. In Namecheap, first use your Validation Record to create a CNAME record.
   1. In Namecheap, select __Domain List__ from the sidebar and click the __Manage__ button next to your domain.
         ![](/img/domains/managebutton.png)
   2. Select the __Advanced DNS__ tab at the top of the page and hit the __Add New Record Button__ for each record you need to add.
         ![](/img/domains/advanceddns.png)
   3. Add a CNAME record where the Host corresponds to the "Record Name/Host" in your DNS record from Cyclic and the Value corresponds to the "Record Value/Target". 
      1. NOTE: The "Record Name/Host" information will tack on your domain name again if it is already included. So when you set up a CNAME record, it is crucial to ONLY insert the alphanumeric portion of the Name/Host and the ```www```
      2. Ex. ```_75d18c39a91766ee704a49763bfd3bfb.www``` 
         ![](/img/domains/subdomimg.png)
   4. Add a second CNAME record where the Host is ```www``` and the Value is your Cyclic generated link.
          ![](/img/domains/cname2.png)

This should complete the pointing of your custom URL to from Namecheap to your application on Cyclic. Bear in mind, it may take up to 48 hours for it to propagate through servers everywhere.

### Redirects

1. In Namecheap, make sure you are on the __Advanced DNS__ page and select  __Add New Record__ for each record you need to add.
2. We recommend the ```@``` Host redirect for all users. Include the full URL from your Cyclic DNS record request as the Value. Failure to include ```https://``` could cause your redirect to fail.
      ![](/img/domains/URLredirect1.png)
3. If you would like to add additional URL redirects, follow the same pattern as above.

### Checking your success

In Cyclic, you can check if you have completed the steps correctly.
Below the pink DNS record section, there is a status box that will give you current information about your domain and SSL certificate. If you are uncertain, be sure to check here first.
![](/img/domains/success.png)
