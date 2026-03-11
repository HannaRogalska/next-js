"use client"

import { EditTaskModalProps, Task } from "@/types/Task";
import { useState } from "react";

const EditTaskModal = ({ task, onSave, onClose }: EditTaskModalProps) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-96 space-y-4">
        <h2 className="text-xl font-semibold">Edit Task</h2>

        <input
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded"
            onClick={() => onClose()}
          >
            Cancel
          </button>

          <button
            className="px-3 py-1 bg-blue-600 text-white rounded"
            onClick={() => onSave({ ...task, title, description } as Task)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal
