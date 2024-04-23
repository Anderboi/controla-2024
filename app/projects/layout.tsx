import React from "react";

const Layout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <section className='space-y-2'>
      {children}
      {modal}
    </section>
  );
};

export default Layout;
