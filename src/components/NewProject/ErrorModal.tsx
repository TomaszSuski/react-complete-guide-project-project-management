import React from "react";
import ErrorState from "../../models/ErrorState";

export default function ErrorModal({ error }: { error: ErrorState }) {
  return (
    <div className="flex flex-col items-center justify-center w-full mr-8 bg-white md:mr-0">
      <h2 className="mb-4 text-xl font-bold text-stone-600">
        Please fix the following errors:
      </h2>
      <ul className="list-disc list-inside">
        {error.title && (
          <li className="text-stone-600">Title cannot be empty</li>
        )}
        {error.description && (
          <li className="text-stone-600">Description cannot be empty</li>
        )}
        {error.dueDate && (
          <li className="text-stone-600">Due date cannot be empty</li>
        )}
      </ul>
    </div>
  );
}
