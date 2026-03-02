import { TaskCardProps } from "@/types/CardType";
import { useState } from "react";

export const TaskCard = ({ title, completed: initialCompleted }: TaskCardProps) => {
    const [completed, setCompleted] = useState(initialCompleted);
    const toggle = ()=> setCompleted(!completed)
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
      <p className={completed ? "line-through text-gray-400" : ""}>{title}</p>
      <button
        onClick={toggle}
        className={`px-3 py-1 rounded ${completed ? "bg-green-500 text-white" : "bg-gray-200"}`}
      >
        {completed ? "Done" : "Mark done"}
      </button>
    </div>
  );
};