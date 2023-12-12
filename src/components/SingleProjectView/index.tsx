import React from "react";
import Project from "../../models/Project";
import Tasks from "./Tasks";
import Task from "../../models/Task";

interface SingleProjectViewProps {
  project: Project;
  closeHandler: () => void;
  deleteHandler: (id: number) => void;
  addTaskHandler: (projectId: number, task: Task) => void;
  deleteTaskHandler: (projectId: number, taskId: number) => void;
  toggleCompletedHandler: (projectId: number, taskId: number) => void;
}

export default function SingleProjectView({
  project,
  closeHandler,
  deleteHandler,
  addTaskHandler,
  deleteTaskHandler,
  toggleCompletedHandler,
}: SingleProjectViewProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <div className="flex flex-col w-1/4 gap-4">
        <menu className="flex gap-4 ml-auto">
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            type="button"
            onClick={closeHandler}
          >
            Close
          </button>
          <button
            className="px-6 py-2 bg-red-800 rounded-md text-stone-50 hover:bg-stone-950"
            type="button"
            onClick={() => deleteHandler(project.id)}
          >
            Delete project
          </button>
        </menu>
        <h1 className="text-2xl font-bold text-center text-stone-800">
          {project.title}
        </h1>
        <p className="text-sm text-left text-stone-600">
          {project.description}
        </p>
        <p className="text-sm text-center text-stone-600">
          {typeof project.dueDate === "string"
            ? project.dueDate
            : project.dueDate.toLocaleDateString()}
        </p>
        <Tasks
          projectId={project.id}
          tasks={project.tasks}
          addTaskHandler={addTaskHandler}
          deleteTaskHandler={deleteTaskHandler}
          toggleCompletedHandler={toggleCompletedHandler}
        />
      </div>
    </div>
  );
}
