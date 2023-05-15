import React from "react";
import { Navbar } from "~/Components/navbar";
import { Footer } from "~/Components/footer";
import Head from "next/head";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div id="screen">
        <Navbar />

        {children}

        <Footer />
      </div> */}
    </React.Fragment>
  );
};
