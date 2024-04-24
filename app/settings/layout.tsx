import React from "react";
import Header from "../../components/layout/Header";
import ContainerBox from "../../components/layout/ContainerBox";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='space-y-2 h-full'>
      <Header title="Настройки" />
      <ContainerBox className="h-full space-y-4 grow">{children}</ContainerBox>
    </section>
  );
};

export default layout;
