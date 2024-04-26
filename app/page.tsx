import React, { Suspense } from "react";
import Search from "@/components/ui/Search";
import ContainerBox from "@/components/layout/ContainerBox";
import Header from "@/components/layout/Header";
import ProjectsGallary from "@/components/layout/ProjectsGallary";
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

const ProjectsPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  return (
    <section className='space-y-2'>
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
    </section>
  );
};

export default ProjectsPage;
