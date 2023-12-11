import React, { ReactNode } from "react";
import AddNewProjectButton from "../common/AddNewProjectButton";
import { ProjectsList } from "../../models/ProjectsList";
import SingleProjectButton from "./SingleProjectButton";

interface ProjectsSidebarProps {
  npOpenHandler?: () => void;
  projectsList?: ProjectsList;
  openProjectHandler: (id: number) => void;
}

export default function ProjectsSidebar({
  npOpenHandler,
  projectsList,
  openProjectHandler,
}: ProjectsSidebarProps) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div className="mb-8">
        <AddNewProjectButton onClick={npOpenHandler}>
          + Add new project
        </AddNewProjectButton>
      </div>
      <ul>
        {Array.isArray(projectsList) &&
          projectsList.map((project) => (
            <SingleProjectButton id={project.id} title={project.title} onClick={openProjectHandler} key={project.id} />
          ))}
      </ul>
    </aside>
  );
}
