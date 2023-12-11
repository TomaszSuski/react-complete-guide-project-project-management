import React, { forwardRef } from "react";

interface ProjectInputProps {
  inputType: "input" | "textarea" | "date";
  inputLabel: string;
  placeholder?: string;
  id: string;
}

const ProjectInput = forwardRef(function ProjectInput(
  { inputType, inputLabel, placeholder, id }: ProjectInputProps,
  ref
) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  let input: HTMLInputElement | HTMLTextAreaElement;
  switch (inputType) {
    case "input":
      input = (
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          className={classes}
          ref={ref as React.RefObject<HTMLInputElement>}
        />
      ) as unknown as HTMLInputElement;
      break;
    case "textarea":
      input = (
        <textarea
          id={id}
          placeholder={placeholder}
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          className={classes}
        />
      ) as unknown as HTMLTextAreaElement;
      break;
    case "date":
      input = (
        <input
          type="date"
          id={id}
          ref={ref as React.RefObject<HTMLInputElement>}
          className={classes}
        />
      ) as unknown as HTMLInputElement;
      break;
  }
  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        htmlFor={id}
        className="text-sm font-bold uppercase text-stone-500"
      >
        {inputLabel}
      </label>
      {<>{input}</>}
    </p>
  );
});

export default ProjectInput;
