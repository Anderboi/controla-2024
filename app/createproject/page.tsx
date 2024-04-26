import CreateProjectForm from "@/components/createProjectForm";
import Header from "@/components/layout/Header";
import React from "react";

const CreateProjectPage = () => {
  return (
    <article className="space-y-2">
      <Header title="Создание проекта" />
      <section
        className="
          rounded-lg 
          bg-secondary-bg-light 
          dark:bg-secondary-bg-dark
          p-4"
      >
        <CreateProjectForm />
      </section>
    </article>
  );
};

export default CreateProjectPage;
