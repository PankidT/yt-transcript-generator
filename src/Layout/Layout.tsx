import React from "react";
import { Navbar } from "~/Components/navbar";
import { Footer } from "~/Components/footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Navbar />

      {children}

      <Footer />
    </React.Fragment>
  );
};
