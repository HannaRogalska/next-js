"use client";

import { PropsForm } from "@/types/Task";
import { useState } from "react";

const TaskForm = ({ addTaskForm }: PropsForm) => {
  const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
console.log(title)

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault;
    addTaskForm({ title, description, id: Date.now(), completed: false });
    setTitle("");
    setDescription("");
  };
  return (
    <form
      onSubmit={handelSubmit}
      className="bg-white p-5 rounded-xl shadow space-y-3"
    >
      <input
        type="text"
        value={title}
        placeholder="Title"
        className="w-full border p-2 rounded"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        className="w-full border p-2 rounded"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
