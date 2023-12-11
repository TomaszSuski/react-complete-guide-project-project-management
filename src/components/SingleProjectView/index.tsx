import React from "react";
import Project from "../../models/Project";

interface SingleProjectViewProps {
  project: Project;
  closeHandler: () => void;
  deleteHandler: (id: number) => void;
}

export default function SingleProjectView({
  project,
  closeHandler,
  deleteHandler,
}: SingleProjectViewProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-2xl font-bold text-stone-800">{project.title}</h1>
      <p className="text-sm text-stone-600">{project.description}</p>
      <p className="text-sm text-stone-600">
        {project.dueDate.toLocaleDateString()}
      </p>
      <menu className="flex gap-4">
        <button
          className="px-6 py-2 mt-4 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          type="button"
          onClick={closeHandler}
        >
          Close
        </button>
        <button
          className="px-6 py-2 mt-4 bg-red-800 rounded-md text-stone-50 hover:bg-stone-950"
          type="button"
          onClick={() => deleteHandler(project.id)}
        >
          Delete
        </button>
      </menu>
    </div>
  );
}
