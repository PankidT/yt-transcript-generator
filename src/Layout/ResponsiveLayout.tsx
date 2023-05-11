import React from "react";

export function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-full md:w-[80%] lg:w-[60%]">{children}</div>;
}
