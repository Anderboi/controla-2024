import React from "react";
import Header from "../../components/layout/Header";
import ContainerBox from "../../components/layout/ContainerBox";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header title="Настройки" />
      <ContainerBox className="h-full space-y-4">{children}</ContainerBox>
    </>
  );
};

export default layout;
