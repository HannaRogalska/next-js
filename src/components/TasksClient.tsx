"use client";

import { PropsTasks, Task } from "@/types/Task";
import { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard";
import TaskForm from "./TaskForm";
import EditTaskModal from "./EditTaskModal";
import StateBox from "./StateBox";

export default function TasksClient({ initialTasks }: PropsTasks) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [dataFromBack, setDataFromBack] = useState<Task[]>([]);
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
    const getAllTask = async () => {
      const response = await fetch("api/tasks");
      const data = await response.json()
      return setTasks(data);
    }

  }, [tasks]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("api/tasks");
      const tasksFromBack = await data.json()
      setDataFromBack(tasksFromBack)
    };
    fetchData()
  }, [])
  
  const saveTask = async ({ title, description, id, completed }: Task) => {
    await fetch(`/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, id, completed }),
    });
  };
    const createPutFun = async (id:number) => {
      await fetch(`/api/tasks`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "New task updated",
          description: "Test",
        }),
      });
    };
  
  const deleteTaskBack = async(id: number) => {
    await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
 }
  const addTask = async ({ title, description, id, completed }: Task) => {
    setTasks((prev) => [...prev, { title, description, id, completed }]);
    saveTask({ title, description, id, completed });
  };
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    deleteTaskBack(id);
    
  };
  const onChangeTask = (task: Task) => {
    setTasks((prev) => prev.map((el) => (el.id === task.id ? task : el)));
    setEditingTask(null)
    createPutFun(task.id);
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
