import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Layout } from "~/Layout/Layout";
import Head from "next/head";
import { Roboto, Inter } from "@next/font/google";

import "~/styles/globals.css";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

// const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={roboto.className}>
      <Head>
        <title>PlayTS</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
