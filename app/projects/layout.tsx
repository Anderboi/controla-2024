import React from "react";
import Header from "../../components/layout/Header";
import ContainerBox from "../../components/layout/ContainerBox";

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
      <Header title="Контакты" />
      {/* <SearchInput urlRoute="/contacts" /> */}
      <ContainerBox
        className="
          h-full
          space-y-4
          "
      >
        {children}
        {modal}
      </ContainerBox>
    </>
  );
};

export default Layout;
