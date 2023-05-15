import React from "react";
import { Navbar } from "~/Components/navbar";
import { Footer } from "~/Components/footer";

export const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Navbar />

      {children}
      <Footer />
    </React.Fragment>
  );
};
