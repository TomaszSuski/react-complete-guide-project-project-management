import React from "react";
import Task from "../../models/Task";

interface TaskProps {
  task: Task;
  toggleCompleted: (id: number) => void;
  deleteHandler: (id: number) => void;
}

export default function SingleTask({
  task,
  toggleCompleted,
  deleteHandler,
}: TaskProps) {
  return (
    <li className="flex flex-col gap-4 mt-4" key={task.id}>
      <div className="flex gap-2">
        <label htmlFor={task.id.toString()}>completed?</label>
        <input
          id={task.id.toString()}
          type="checkbox"
          checked={task.completed}
          className="w-4 h-4 rounded-sm bg-stone-800 border-stone-800"
          onChange={() => toggleCompleted(task.id)}
        />
      </div>
      <p className="text-sm text-left text-stone-600">{task.title}</p>
      <p className="text-sm text-left text-stone-600">{task.description}</p>
      <button
        onClick={() => deleteHandler(task.id)}
        type="button"
        className="px-6 py-2 text-sm bg-red-800 rounded-md text-stone-50 hover:bg-stone-950"
      >
        Delete task
      </button>
    </li>
  );
}
