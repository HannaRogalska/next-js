"use client"
import { Task } from "@/types/Task";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const TaskPage = () => {
   const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null);
  const idNumber = Number(id)

   useEffect(() => {
     if (!id) return; 
     const data = localStorage.getItem("tasks");
     if (!data) return;

     const tasks: Task[] = JSON.parse(data);
     const foundTask = tasks.find((e) => e.id === idNumber);

     if (foundTask) setTask(foundTask);
   }, [id]);

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h1 className="text-2xl font-bold">{task?.title}</h1>
      <p className="text-gray-600">{task?.description}</p>
     
    </div>
  );
};

export default TaskPage;
