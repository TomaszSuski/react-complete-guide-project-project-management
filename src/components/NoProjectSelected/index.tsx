import React from "react";
import AddNewProjectButton from "../common/AddNewProjectButton";

export default function NoPojectSelected() {
  return (
    <div className="flex flex-col items-center justify-center w-2/3">
        <img src="src/assets/no-projects.png" alt="An empty tasks list" className="object-contain w-16 h-16 mx-auto" />
      <h2 className="my-4 text-2xl font-bold text-stone-500">No Project Selected</h2>
      <p className="mb-4 text-stone-400">
        Select a project from the sidebar or create a new one.
      </p>
      <p className="mt-8 ">
        <AddNewProjectButton>Create new project</AddNewProjectButton>
      </p>
    </div>
  );
}
