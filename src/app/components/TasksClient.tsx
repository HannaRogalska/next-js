"use client";

import { PropsTasks, Task } from "@/app/types/Task";
import { useState } from "react";
import { TaskCard } from "./TaskCard";
import TaskForm from "./TaskForm";
import EditTaskModal from "./EditTaskModal";
import StateBox from "./StateBox";
import {
  changeTask,
  createTask,
  deleteTaskDB,
} from "@/app/actions/taskActions";
import { useTransition } from "react";

export default function TasksClient({ initialTasks }: PropsTasks) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isPending, startTransition] = useTransition();
  const addTask = async ({ title, description, id, completed }: Task) => {
    startTransition(async () => {
      const newTask = await createTask({ title, description, id, completed });
      setTasks((prev) => [...prev, newTask]);
    });
  };
  const deleteTask = async (id: string) => {
    startTransition(async () => {
      await deleteTaskDB(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    });
  };
  const onChangeTask = async (task: Task) => {
    setTasks((prev) => prev.map((el) => (el.id === task.id ? task : el)));
    setEditingTask(null);
    await changeTask(task.id, task);
  };

  const toggleTask = async (id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    const newCompleted = !task.completed;
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: newCompleted } : t)),
    );
    await changeTask(id, { completed: newCompleted });
  };
  return (
    <div className="space-y-4">
      <StateBox initialTasks={tasks} />
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
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onSave={(task) => onChangeTask(task)}
          onClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
}
