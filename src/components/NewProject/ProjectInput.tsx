import React, { useRef } from "react";

interface ProjectInputProps {
  inputType: "input" | "textarea" | "date";
  inputLabel: string;
  placeholder?: string;
  id: string;
}

interface InputComponentProps {
  inputType: "input" | "textarea" | "date";
  placeholder?: string;
  id: string;
}

export default function ProjectInput({
  inputType,
  inputLabel,
  placeholder,
  id,
}: ProjectInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        htmlFor={id}
        className="text-sm font-bold uppercase text-stone-500"
      >
        {inputLabel}
      </label>
      <InputComponent inputType={inputType} placeholder={placeholder} id={id} />
    </p>
  );
}

function InputComponent({ inputType, placeholder, id }: InputComponentProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

  switch (inputType) {
    case "input":
      return (
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          ref={inputRef}
          className={classes}
        />
      );
    case "textarea":
      return (
        <textarea
          id={id}
          placeholder={placeholder}
          ref={textareaRef}
          className={classes}
        />
      );
    case "date":
      return <input type="date" id={id} ref={dateRef} className={classes} />;
  }
}
