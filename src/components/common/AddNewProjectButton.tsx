import React from "react";

interface AddNewProjectButtonProps {
    onClick?: () => void;
    children?: string;
    }

export default function AddNewProjectButton({ onClick, children }: AddNewProjectButtonProps) {
  return (
    <button type="button" onClick={onClick} className="px-4 py-2 text-xs rounded-md md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
      {children}
    </button>
  );
}
