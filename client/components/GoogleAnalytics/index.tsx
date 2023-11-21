'use client';

import Script from "next/script"
import * as gtag from "./gtag"

import { usePathname } from "next/navigation"
import { useEffect } from "react";

const GoogleAnalytics = () => {

  const pathname = usePathname();

  useEffect(() => {
    const url = `${pathname}`;
    console.log(url);
    gtag.pageview(url);
  }, [pathname]);

  return (
    <>
      {process.env.NODE_ENV === 'production' &&
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${gtag.GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      });
                    `,
            }}
          />
        </>
      }
    </>
  )
}

export default GoogleAnalytics