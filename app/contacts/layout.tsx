import React from "react";
import Header from "../../components/layout/Header";
import ContainerBox from "../../components/layout/ContainerBox";

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
      <Header title="Контакты" />
      {/* <SearchInput urlRoute="/contacts" /> */}
      <ContainerBox
        className="
          h-full
          space-y-4
          //no-scrollbar
          "
      >
        {children}
        {login}
      </ContainerBox>
    </>
  );
};

export default Layout;
