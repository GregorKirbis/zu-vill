import React from "react";
import { Metadata } from "next";

import { AdminBar } from "./_components/AdminBar";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Providers } from "./_providers";
import { mergeOpenGraph } from "./_utilities/mergeOpenGraph";

import "./_css/style.css";


import"./_css/templete.mini.css";
import "./_css/theme.css";
import "./_css/skin-1.css";


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body id="bg">
        <div className="App">
          <div className="page-wraper">
            <Providers>
              {/*<AdminBar />*/}
              {/* @ts-expect-error */}
              {<Header />}
              <div className="page-content bg-white">{children}</div>
              {/* @ts-expect-error */}
              {<Footer />}
            </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || "https://payloadcms.com"),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
  openGraph: mergeOpenGraph(),
};
