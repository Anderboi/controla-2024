import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <section className="space-y-2">{children}</section>;
};

export default Layout;
