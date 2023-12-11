import React, { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./models/Project";
import { ProjectsList } from "./models/ProjectsList";
import SingleProjectView from "./components/SingleProjectView";

type CurrentContent = "newProject" | "noProject" | "singleProject";

function App() {
  const [currentContent, setCurrentContent] =
    useState<CurrentContent>("noProject");
  const [projectsList, setProjectsList] = useState<ProjectsList>([]);
  const [project, setProject] = useState<Project | null>(null);

  const handleOpenProject = (id: number) => {
    const project = projectsList.find((project) => project.id === id);
    if (project) {
      setProject(project);
      setCurrentContent("singleProject");
    }
  };
  const handleNewProjectOpen = () => {
    setCurrentContent("newProject");
  };
  const closeHandler = () => {
    setCurrentContent("noProject");
  };
  const deleteProjectHandler = (id: number) => {
    const newProjectsList = projectsList.filter((project) => project.id !== id);
    setProjectsList(newProjectsList);
    setCurrentContent("noProject");
  };
  const addNewProjectHandler = (project: Project) => {
    const newId =
      projectsList.length > 0
        ? projectsList[projectsList.length - 1]?.id + 1
        : 1;
    setProjectsList((prevProjectsList) => [
      ...prevProjectsList,
      { ...project, id: newId } as Project,
    ]);
  };

  let content: JSX.Element = <></>; // Initialize with a default value
  switch (currentContent) {
    case "newProject":
      content = (
        <NewProject
          npCloseHandler={closeHandler}
          addProjectHandler={addNewProjectHandler}
        />
      );
      break; // Add break statement to prevent fall-through
    case "noProject":
      content = <NoProjectSelected npOpenHandler={handleNewProjectOpen} />;
      break; // Add break statement to prevent fall-through
    case "singleProject":
      if (project) {
        content = (
          <SingleProjectView project={project} closeHandler={closeHandler} deleteHandler={deleteProjectHandler} />
        );
      }
      break; // Add break statement to prevent fall-through
  }

  return (
    <main className="flex h-screen gap-8 py-8 ">
      <ProjectsSidebar
        npOpenHandler={handleNewProjectOpen}
        openProjectHandler={handleOpenProject}
        projectsList={projectsList}
      />
      {content}
    </main>
  );
}

export default App;
