import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
function gtag(){window.dataLayer.push(arguments);}
if (typeof window !== "undefined") {
  let host = window.location.hostname;
  if (host !== "localhost") {
    let google_analytics_ua = document.createElement('script'); 
    google_analytics_ua.src = 'https://www.googletagmanager.com/gtag/js?id=UA-199750669-5';
    google_analytics_ua.crossOrigin = 'anonymous';
    google_analytics_ua.onload = ()=>{
      window.dataLayer = window.dataLayer || [];
      gtag('js', new Date());
      gtag('config', 'UA-199750669-5');
    }
    
    let google_analytics_v4 = document.createElement('script'); 
    google_analytics_v4.src = 'https://www.googletagmanager.com/gtag/js?id=G-6XCRJ26R8D';
    google_analytics_v4.crossOrigin = 'anonymous';
    google_analytics_v4.onload = ()=>{
      window.dataLayer = window.dataLayer || [];
      gtag('js', new Date());
      gtag('config', 'G-6XCRJ26R8D');
    }
    
    document.head.appendChild(google_analytics_ua);
    document.head.appendChild(google_analytics_v4);
    
    let logrocket = document.createElement('script'); 
    logrocket.src = 'https://lr-cdn.cyclic.cloud/LogRocket.min.js';
    logrocket.crossOrigin = 'anonymous';
    logrocket.onload = ()=>{
      let init_lr = window.LogRocket && window.LogRocket.init('sprnyp/docscyclicsh',{
        serverURL: "https://lr-data.cyclic.cloud/i",
      })
    }

    document.head.appendChild(logrocket);
  }
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link> */}
          <Link  href="/docs/intro" className={clsx("pagination-nav__link", styles.textButton)}>
            <div className={styles.textButtonHead}><strong>Get Started »</strong></div>
            <div className={styles.textButtonDesc}>Build something cool, learn how to start fresh or deploy an existing project with Cyclic</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for cyclic.sh"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
