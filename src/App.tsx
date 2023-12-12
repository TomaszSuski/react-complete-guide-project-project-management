import React, { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./models/Project";
import { ProjectsList } from "./models/ProjectsList";
import SingleProjectView from "./components/SingleProjectView";
import { getNextId } from "./helpers";
import Task from "./models/Task";

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
    const newId = getNextId(projectsList);
    setProjectsList((prevProjectsList) => [
      ...prevProjectsList,
      { ...project, id: newId, tasks: [] } as Project,
    ]);
    setCurrentContent("noProject");
  };

  const addTaskHandler = (projectId: number, task: Task) => {
    const newProjectsList = projectsList.map((project) => {
      if (project.id === projectId) {
        project.tasks.push(task);
      }
      return project;
    });
    setProjectsList(newProjectsList);
  };
  const deleteTaskHandler = (projectId: number, taskId: number) => {
    const newProjectsList = projectsList.map((project) => {
      if (project.id === projectId) {
        project.tasks = project.tasks.filter((task) => task.id !== taskId);
      }
      return project;
    });
    setProjectsList(newProjectsList);
  };
  const toggleCompletedHandler = (projectId: number, taskId: number) => {
    const newProjectsList = projectsList.map((project) => {
      if (project.id === projectId) {
        project.tasks = project.tasks.map((task) => {
          if (task.id === taskId) {
            task.completed = !task.completed;
          }
          return task;
        });
      }
      return project;
    });
    setProjectsList(newProjectsList);
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
          <SingleProjectView
            project={project}
            closeHandler={closeHandler}
            deleteHandler={deleteProjectHandler}
            addTaskHandler={addTaskHandler}
            deleteTaskHandler={deleteTaskHandler}
            toggleCompletedHandler={toggleCompletedHandler}
          />
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
