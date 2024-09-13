import React from "react";
import { Metadata } from "next";

import { AdminBar } from "./_components/AdminBar";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Providers } from "./_providers";
import { mergeOpenGraph } from "./_utilities/mergeOpenGraph";
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from 'next/head';

import "./_css/style.css";
import "./_css/templete.mini.css";
import "./_css/theme.css";
import "./_css/skin-1.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="sl" suppressHydrationWarning>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        </Head>
      <body id="bg">
        <div id="app" className="App">
          <div className="page-wraper">
            <Providers>
               {/* @ts-expect-error */}
              <Header />
              <div className="page-content bg-white">{children}</div>
               {/* @ts-expect-error */}
              <Footer />
            </Providers>
          </div>
        </div>
        <GoogleAnalytics gaId="G-PFL1NM2KSK" />
      </body>
    </html>
  );
}
/*export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
  title: "--Zu-vil.si - Servis viličarjev in prodaja rezervnih delov",
  description: "Specializirani za servis viličarjev in prodajo rezervnih delov. Kvalitetne storitve in vrhunski izdelki.",
  twitter: {
    card: "summary_large_image",
    creator: "@gregorKirbis",
    title: "Zu-vil.si - Servis viličarjev in prodaja rezervnih delov",
  },
  openGraph: mergeOpenGraph(),
};*/
