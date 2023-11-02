"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(o),u=r,h=m["".concat(d,".").concat(u)]||m[u]||p[u]||n;return o?a.createElement(h,i(i({ref:t},c),{},{components:o})):a.createElement(h,i({ref:t},c))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<n;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3736:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=o(7462),r=(o(7294),o(3905));const n={sidebar_position:1},i="Overview",l={unversionedId:"how-to/custom-domains/overview",id:"how-to/custom-domains/overview",title:"Overview",description:"Cyclic apps are given random subdomain names at first deployment. The general structure of a name is -",source:"@site/docs/how-to/custom-domains/overview.md",sourceDirName:"how-to/custom-domains",slug:"/how-to/custom-domains/overview",permalink:"/how-to/custom-domains/overview",draft:!1,editUrl:"https://github.com/cyclic-software/docs/blob/main/docs/how-to/custom-domains/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Using MongoDB",permalink:"/how-to/using-mongo-db"},next:{title:"Cloudflare",permalink:"/how-to/custom-domains/cloudflare"}},d={},s=[{value:"Change the subdomain",id:"change-the-subdomain",level:2},{value:"Add a domain you own to an app",id:"add-a-domain-you-own-to-an-app",level:2},{value:"Set up with your domain registrar",id:"set-up-with-your-domain-registrar",level:2},{value:"Cloudflare",id:"cloudflare",level:3},{value:"GoDaddy",id:"godaddy",level:3},{value:"Namecheap",id:"namecheap",level:3},{value:"Additional support",id:"additional-support",level:2}],c={toc:s};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Cyclic apps are given random subdomain names at first deployment. The general structure of a name is -"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"some-random-words.cyclic.app")),(0,r.kt)("p",null,"You can customize this domain in two ways:"),(0,r.kt)("h2",{id:"change-the-subdomain"},"Change the subdomain"),(0,r.kt)("p",null,"To change the subdomain to something like ",(0,r.kt)("inlineCode",{parentName:"p"},"myproject.cyclic.app"),", navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Environments")," and use the form in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom Subdomain")," panel. You will be able to select a any custom domain that hasn't already been used."),(0,r.kt)("h2",{id:"add-a-domain-you-own-to-an-app"},"Add a domain you own to an app"),(0,r.kt)("p",null,"You can attach a domain you own to a Cyclic app. This requires you to create two DNS records. The first record - to verify that you own the domain so that Cyclic can request the issue of an SSL certificate. The certificates are signed by AWS and are auto-renewed as long as appropriate DNS records exist. The second record, to route requests between your domain and cyclic app."),(0,r.kt)("admonition",{title:"CAA Record",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"   Since Cyclic delegates the issue of the SSL certificate to Amazon AWS, your DNS must allow AWS to create certs for your domain. A Certification Authority Authorization (CAA) record is used to specify which certificate authorities (CAs) are allowed to issue certificates for a domain. "),(0,r.kt)("p",{parentName:"admonition"},"   For the validation to succeed, your DNS configuration must either not have any CAA records specified (allows all CA's) or include a CAA record with a value ",(0,r.kt)("inlineCode",{parentName:"p"},"amazon.com")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"amazonaws.com"),". Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-caa.html"},"AWS docs for more info"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Request a domain on the dashboard ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom Domains")," panel.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will receive two DNS records to add to your registrar"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"CNAME")," validation record that will look something like this:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Record Name:  _xxxxxxxxxxx.your-domain.com\nRecord Value: _yyyyyyyyyyy_.abcdef.acm-validations.aws\n")),(0,r.kt)("p",{parentName:"li"},"This record is used to verify domain ownership and issue an SSL certificate for ",(0,r.kt)("inlineCode",{parentName:"p"},"myproject.your-domain.com")," "),(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"CNAME")," record to point your domain at your cyclic app, something like this:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Record Name:  myproject.your-domain.com (the domain you requested) \nRecord Value: some-random-words.cyclic.app\n")),(0,r.kt)("p",{parentName:"li"},"This record will route traffic from your domain to your app."))),(0,r.kt)("p",null,"Once you add the records, it will take between 2 minutes to 24 hours for the domain to be live as DNS changes take time to propagate."),(0,r.kt)("admonition",{title:"Apex Domains",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'A domain apex is the "root" level of your domain. ',(0,r.kt)("inlineCode",{parentName:"p"},"your-domain.com"),' is the "root" level, while ',(0,r.kt)("inlineCode",{parentName:"p"},"www.your-domain.com")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"abc.your-domain.com")," are both subdomains."),(0,r.kt)("p",{parentName:"admonition"},"Your registrar may not support CNAME records at apex.\nMany registrars support forwarding. A common practice is to register a ",(0,r.kt)("inlineCode",{parentName:"p"},"www")," subdomain and forward apex to it.")),(0,r.kt)("h2",{id:"set-up-with-your-domain-registrar"},"Set up with your domain registrar"),(0,r.kt)("h3",{id:"cloudflare"},"Cloudflare"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/how-to/custom-domains/cloudflare"},"Custom Domains \u27eb Cloudflare"))),(0,r.kt)("h3",{id:"godaddy"},"GoDaddy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/how-to/custom-domains/godaddy"},"Custom Domains \u27eb GoDaddy"))),(0,r.kt)("h3",{id:"namecheap"},"Namecheap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/how-to/custom-domains/namecheap"},"Custom Domains \u27eb Namecheap"))),(0,r.kt)("h2",{id:"additional-support"},"Additional support"),(0,r.kt)("p",null,"Reach out to us for any additional support on  ",(0,r.kt)("a",{parentName:"p",href:"https://discord.cyclic.sh/support"},(0,r.kt)("i",{className:"fab fa-discord"}),"  Discord")))}p.isMDXComponent=!0}}]);