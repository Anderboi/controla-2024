import React, { Suspense } from "react";
import ContainerBox from "@/components/layout/ContainerBox";
import Header from "@/components/layout/Header";
import { getCurrntProject } from "@/lib/supabase/supabase";
import { formatDate } from '@/lib/utils';

const page = async ({ params }: { params: { id: number } }) => {
  const project = await getCurrntProject(params.id);

  return (
    <>
      <Header
        title={project.address_street || ""}
        subtitle={`${formatDate(project.created_at)}`}
      />
      <ContainerBox
        className="
          h-full
          space-y-4
          "
      >
        <Suspense
          key={params.id}
          fallback={"<InvoicesTableSkeleton /> Insert skeleton"}
        >
          <p>Content</p>
        </Suspense>
      </ContainerBox>
    </>
  );
};

export default page;
