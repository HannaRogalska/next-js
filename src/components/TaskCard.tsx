"use client";
import { Props } from "@/types/Task";

export const TaskCard = ({ task, onToggle }: Props) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
      <div className={task.completed ? "line-through text-gray-400" : ""}>
        <p>{task.title}</p>
        <p>{task.description}</p>
      </div>
      <button
        onClick={() => onToggle(task.id)}
        className={`px-3 py-1 rounded ${task.completed ? "bg-green-500 text-white" : "bg-gray-200"}`}
      >
        {task.completed ? "Done" : "Mark done"}
      </button>
    </div>
  );
};
