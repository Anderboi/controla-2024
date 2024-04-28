import { getProjectsByTitle } from "@/lib/supabase/supabase";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

const ProjectsGallary = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const projects = await getProjectsByTitle(query);

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {projects.map((project) => (
        <Card key={project.project_id} className="overflow-hidden">
          <Link
            href={`/projects/${project.project_id} `}
            key={project.project_id}
          >
            <CardContent
              className="
                aspect-video
                h-[180px] 
                w-full
                p-0
                "
            >
              <div className="relative block size-full overflow-hidden">
                <Image
                  alt="Project cover"
                  src="https://picsum.photos/200"
                  // width={600}
                  // height={400}
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  // objectFit="cover"
                  fill
                  className="w-full object-cover"
                />
              </div>
            </CardContent>
            <CardFooter className="block p-4">
              <CardTitle>{project.address_street}</CardTitle>
              <CardDescription>
                {formatDate(project.created_at)}
              </CardDescription>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </section>
  );
};

export default ProjectsGallary;
