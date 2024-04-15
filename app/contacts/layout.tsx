import React from "react";

const Layout = ({
  children,
  login,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = true;

  if (!isLoggedIn) return login;

  return (
    <>
      {children}
      {login}
    </>
  );
};

export default Layout;
