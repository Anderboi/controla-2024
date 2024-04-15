import React, { Suspense } from "react";
import Search from "@/components/ui/Search";
import ContainerBox from "@/components/layout/ContainerBox";
import Header from "@/components/layout/Header";
import ProjectsGallary from "@/components/layout/ProjectsGallary";

const ProjectsPage = ({
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
      <Header title="Проекты" />
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
          <ProjectsGallary query={query} currentPage={currentPage} />
        </Suspense>
      </ContainerBox>
    </>
  );
};

export default ProjectsPage;
