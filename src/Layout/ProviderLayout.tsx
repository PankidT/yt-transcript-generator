import React from "react";
import ModalProvider from "~/Components/modelSetting";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ModalProvider>{children}</ModalProvider>;
};
