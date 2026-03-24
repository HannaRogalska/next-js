"use client";

import { PropsTasks, Task } from "@/types/Task";
import { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard";
import TaskForm from "./TaskForm";
import EditTaskModal from "./EditTaskModal";
import StateBox from "./StateBox";
import { createTask, deleteTaskDB } from "@/app/actions/taskActions";

export default function TasksClient({ initialTasks }: PropsTasks) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const addTask = async ({ title, description, id, completed }: Task) => {
    const newTask = await createTask({
      title,
      description,
      completed,
      id,
    });
    setTasks((prev) => [...prev, newTask]);
  };
  const deleteTask = async(id: string) => {
     await deleteTaskDB(id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const onChangeTask = (task: Task) => {
    setTasks((prev) => prev.map((el) => (el.id === task.id ? task : el)));
    setEditingTask(null);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
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
