import React from "react";

const Layout = ({
  children,
  modal,
  login,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  login: React.ReactNode;
}>) => {

  
  const isLoggedIn = true;

  if (!isLoggedIn) return login;

  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default Layout;
