import Search from "@/components/ui/Search";
import ContainerBox from "@/components/layout/ContainerBox";
import Header from "@/components/layout/Header";
import React, { Suspense } from "react";
import ContactsGallary from '@/components/layout/ContactsGallary';

const ContactsPage = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <>
      <Header title="Контакты" />
      <Search />
      <ContainerBox
        className="
          h-full
          space-y-4
          "
      >
        <Suspense
          key={query + currentPage}
          fallback={"<InvoicesTableSkeleton /> Insert skeleton"}
        >
          <ContactsGallary query={query} currentPage={currentPage} />
        </Suspense>
      </ContainerBox>
    </>
  );
};

export default ContactsPage;
