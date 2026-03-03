"use client";

import { PropsTasks, Task } from "@/types/Task";
import { useState } from "react";
import { TaskCard } from "./TaskCard";

export default function TasksClient({ initialTasks }: PropsTasks) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
    return (
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </div>
    )
}
