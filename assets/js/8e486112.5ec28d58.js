"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),b=c(n),m=o,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},s="Websockets",a={unversionedId:"troubleshooting/websockets",id:"troubleshooting/websockets",title:"Websockets",description:"Websockets are currently not supported in Cyclic apps.",source:"@site/docs/troubleshooting/websockets.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/websockets",permalink:"/troubleshooting/websockets",draft:!1,editUrl:"https://github.com/cyclic-software/docs/blob/main/docs/troubleshooting/websockets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nodemon",permalink:"/troubleshooting/nodemon"},next:{title:"Getting Started with a RESTful API",permalink:"/tutorials/rest-api-and-dynamodb/part-1"}},l={},c=[{value:"Why?",id:"why",level:2},{value:"Possible Alternatives",id:"possible-alternatives",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"websockets"},"Websockets"),(0,o.kt)("p",null,"Websockets are currently not supported in Cyclic apps."),(0,o.kt)("h2",{id:"why"},"Why?"),(0,o.kt)("p",null,"Serverless functions are active on-demand for just long enough to process a single event. After the processing task is finished, often just a few milliseconds, the runtime is suspended until it is again invoked by another event. The on-demand short lifecycle enables applications to have massive scalability with almost no idle cost. "),(0,o.kt)("p",null,"Websockets require a persistent bi-directional link. In most websockets implementations, for an idle connection, a compute instance must be reserved for the duration of the connection regardless of whether a message is available for processing or not. At the same time, if a high traffic volume is possible - potentially many compute instances should be reserved in anticipation. This creates the need for further complexity in capacity planning and  managing tasks to facilitate the scaling up and down of the sizing and number of compute instances."),(0,o.kt)("h2",{id:"possible-alternatives"},"Possible Alternatives"),(0,o.kt)("p",null,"There are several realtime API services that you might use to create a similar effect to websockets.\nAs a starting point, the ones on this list are creditable and well-supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ably.com/"},"Ably")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pusher.com/"},"Pusher")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.pubnub.com/"},"PubNub"))))}u.isMDXComponent=!0}}]);