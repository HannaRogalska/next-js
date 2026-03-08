"use client";

import { PropsTasks, Task } from "@/types/Task";
import { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard";
import TaskForm from "./TaskForm";
import EditTaskModal from "./EditTaskModal";

export default function TasksClient({ initialTasks }: PropsTasks) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      setTasks(initialTasks);
    }
  }, [initialTasks]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = ({ title, description, id, completed }: Task) => {
    setTasks((prev) => [...prev, { title, description, id, completed }]);
  };
  const deleteTask = (id: number) => {
   setTasks((prev) => prev.filter((task) => task.id !== id));
  };
 


  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  return (
    <div className="space-y-4">
      <TaskForm addTaskForm={addTask} />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={(task) => setEditingTask(task)}
        />
      ))}
      {editingTask && <EditTaskModal task={editingTask} />}
    </div>
  );
}
