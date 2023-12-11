import React from "react";
import ProjectInput from "./ProjectInput";

export default function NewProject() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            type="submit"
          >
            Save
          </button>
        </li>
      </menu>
      <form onSubmit={handleSubmit} id="project-form">
        <ProjectInput
          inputLabel="Project Title"
          placeholder="My Project"
          id="project-input"
          inputType="input"
        />
        <ProjectInput
          inputLabel="Project Description"
          placeholder="My Project Description"
          id="project-description"
          inputType="textarea"
        />
        <ProjectInput
          inputLabel="Project Due Date"
          id="project-due-date"
          inputType="date"
        />
      </form>
    </div>
  );
}
