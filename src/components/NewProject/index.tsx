import React, { useRef, useState } from "react";
import ProjectInput from "./ProjectInput";
import Project from "../../models/Project";
import ErrorState from "../../models/ErrorState";
import Modal from "../common/Modal";
import ErrorModal from "./ErrorModal";

interface NewProjectProps {
  npCloseHandler?: () => void;
  addProjectHandler: (project: Project) => void;
}

export default function NewProject({
  npCloseHandler,
  addProjectHandler,
}: NewProjectProps) {
  const [error, setError] = useState<ErrorState>({
    title: false,
    description: false,
    dueDate: false,
  });

  const modalRef = useRef<any>(null);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const clearInputs = () => {
    titleRef.current!.value = "";
    descriptionRef.current!.value = "";
    dateRef.current!.value = "";
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = titleRef.current?.value ?? "";
    const description = descriptionRef.current?.value ?? "";
    const date = dateRef.current?.value ? new Date(dateRef.current?.value) : "";
    const project = {
      id: 0,
      title,
      description,
      dueDate: date,
    };
    if (!project.title || !project.description || !project.dueDate) {
      setError({
        title: !project.title,
        description: !project.description,
        dueDate: !project.dueDate,
      });
      modalRef.current.open();
      return;
    }
    addProjectHandler(project);
    clearInputs();
  };

  return (
    <>
      <Modal
        ref={modalRef}
        onModalClose={() => {
          setError({
            title: false,
            description: false,
            dueDate: false,
          });
        }}
        closeBtnText="Close to fix errors"
      >
        <ErrorModal error={error} />
      </Modal>
      <div className="flex flex-col items-center justify-center w-2/3 mr-8 md:mr-0">
        <form
          onSubmit={handleSubmit}
          id="project-form"
          className="w-full md:w-[35rem]"
        >
          <menu className="flex items-center justify-end w-full md:w-[35rem] gap-4 my-4">
            <li>
              <button
                onClick={npCloseHandler}
                type="button"
                className="text-stone-800 hover:text-stone-950"
              >
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
          <ProjectInput
            inputLabel="Project Title"
            placeholder="My Project"
            id="project-title"
            inputType="input"
            ref={titleRef}
          />
          <ProjectInput
            inputLabel="Project Description"
            placeholder="My Project Description"
            id="project-description"
            inputType="textarea"
            ref={descriptionRef}
          />
          <ProjectInput
            inputLabel="Project Due Date"
            id="project-due-date"
            inputType="date"
            ref={dateRef}
          />
        </form>
      </div>
    </>
  );
}
