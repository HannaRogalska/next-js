"use client";
import { Props } from "@/types/Task";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

export const TaskCard = ({ task, onToggle, onDelete, onEdit }: Props) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
      <div className={task.completed ? "line-through text-gray-400" : ""}>
        <p>{task.title}</p>
        <p>{task.description}</p>
      </div>
      <div className="relative">
        <button
          onClick={() => onToggle(task.id)}
          className={`px-3 py-1 mr-1 rounded ${task.completed ? "bg-green-500 text-white" : "bg-gray-200"}`}
        >
          {task.completed ? "Done" : "Mark done"}
        </button>

        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">:</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Action event example">
            <DropdownItem
              key="edit"
              className="px-3 py-1 mr-1 rounded bg-green-500 text-white mb-1.5 cursor-pointer"
              onClick={()=> onEdit(task)}
            >
              Edit file
            </DropdownItem>
            <DropdownItem
              key="delete"
              className="px-3 py-1 mr-1 rounded bg-green-500 text-white"
              color="danger"
              onClick={() => onDelete(task.id)}
            >
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};
