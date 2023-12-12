import React, { useState } from "react";
import Task from "../../models/Task";
import { getNextId } from "../../helpers";
import SingleTask from "./SingleTask";

interface TasksProps {
  projectId: number;
  tasks: Task[];
  addTaskHandler: (projectId: number, task: Task) => void;
  deleteTaskHandler: (projectId: number, taskId: number) => void;
  toggleCompletedHandler: (projectId: number, taskId: number) => void;
}

export default function Tasks({
  projectId,
  tasks,
  addTaskHandler,
  deleteTaskHandler,
  toggleCompletedHandler,
}: TasksProps) {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLInputElement>(null);

  const addTask = () => {
    const task: Task = {
      id: getNextId(tasks),
      title: titleRef.current!.value,
      description: descriptionRef.current!.value,
      completed: false,
    };
    addTaskHandler(projectId, task);
    titleRef.current!.value = "";
    descriptionRef.current!.value = "";
  };

  const deleteTask = (id: number) => {
    deleteTaskHandler(projectId, id);
  };

  const toggleTaskCompleted = (id: number) => {
    toggleCompletedHandler(projectId, id);
  };

  return (
    <div className="flex flex-col w-full gap-4 mt-8">
      <div className="w-full h-[2px] bg-stone-800"></div>
      <h3 className="font-bold text-center text-l text-stone-800">TASKS</h3>

      {tasks.length === 0 && (
        <p className="text-sm text-center text-stone-600">No tasks yet</p>
      )}
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="w-full px-4 py-2 rounded-md bg-stone-800 text-stone-50"
          placeholder="Task title"
          ref={titleRef}
        />
        <input
          type="text"
          className="w-full px-4 py-2 rounded-md bg-stone-800 text-stone-50"
          placeholder="Task description"
          ref={descriptionRef}
        />
        <button
          className="px-6 py-2 ml-auto rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          type="button"
          onClick={() => addTask()}
        >
          Add task
        </button>
      </form>
      <ul className="flex flex-col gap-2">
        {tasks.map((task) => (
          <SingleTask
            task={task}
            toggleCompleted={toggleTaskCompleted}
            deleteHandler={deleteTask}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
}
