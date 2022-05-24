module.exports = function (context, options) {
  return {
    name: 'analytics',
    // async loadContent() {
    //   return 1 + Math.floor(Math.random() * 10);
    // },
    injectHtmlTags({content}) {
      if(process.env.NODE_ENV =='development'){
        return {}
      }

      return {
        headTags: [
          // '<script>body {color: green}</style>',
          {
            tagName: 'script',
            innerHTML: `
              function gtag(){window.dataLayer.push(arguments);}
            `
          },
          {
            tagName: 'script',
            innerHTML: `
              let google_analytics_ua = document.createElement('script'); 
              google_analytics_ua.src = 'https://www.googletagmanager.com/gtag/js?id=UA-199750669-5';
              google_analytics_ua.crossOrigin = 'anonymous';
              google_analytics_ua.onload = ()=>{
                window.dataLayer = window.dataLayer || [];
                gtag('js', new Date());
                gtag('config', 'UA-199750669-5'); 
              } 
              document.head.appendChild(google_analytics_ua); 
            `
          },
          {
            tagName: 'script',
            innerHTML: `
              let google_analytics_v4 = document.createElement('script'); 
              google_analytics_v4.src = 'https://www.googletagmanager.com/gtag/js?id=G-6XCRJ26R8D';
              google_analytics_v4.crossOrigin = 'anonymous';
              google_analytics_v4.onload = ()=>{
                window.dataLayer = window.dataLayer || [];
                gtag('js', new Date());
                gtag('config', 'G-6XCRJ26R8D');
              } 
              document.head.appendChild(google_analytics_v4);
            `
          },
          {
            tagName: 'script',
            innerHTML: `
              let logrocket = document.createElement('script'); 
              logrocket.src = 'https://lr-cdn.cyclic.cloud/LogRocket.min.js';
              logrocket.crossOrigin = 'anonymous';
              logrocket.onload = ()=>{
                let init_lr = window.LogRocket && window.LogRocket.init('sprnyp/docscyclicsh',{
                  serverURL: "https://lr-data.cyclic.cloud/i",
                })
              }

              document.head.appendChild(logrocket);
            `
          },
        ],
        // postBodyTags: [`<div> This is post body </div>`],
      };
    },
  };
};