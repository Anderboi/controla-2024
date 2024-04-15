import React from "react";
import getProjectsByTitle from "@/actions/projects/getProjectsByTitle";

const ProjectsGallary = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const projects = await getProjectsByTitle(query);

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <div>{project.address_street}</div>
      ))}
    </section>
  );
};

export default ProjectsGallary;
