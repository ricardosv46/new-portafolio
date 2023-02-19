import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full max-w-[1000px] mx-auto">{children}</section>
  );
};

export default Layout;
