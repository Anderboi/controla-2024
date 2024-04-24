import ContainerBox from "@/components/layout/ContainerBox";
import Header from "@/components/layout/Header";
import Search from "@/components/ui/Search";
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
    <section className="space-y-2">
      <Header title="Контакты" />
      <Search />
      <ContainerBox
        className="
          h-full
          space-y-4 grow
          "
      >
        {children}
        {login}
      </ContainerBox>
    </section>
  );
};

export default Layout;
