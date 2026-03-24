"use client";

import { useState } from "react";
import { PropsForm } from "@/types/Task";

const TaskForm = ({ addTaskForm }: PropsForm) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    addTaskForm({
      title,
      description,
      id: Date.now().toString(),
      completed: false,
    });
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
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
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
