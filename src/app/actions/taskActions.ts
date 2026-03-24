"use server";

import clientPromise from "@/app/lib/mongodb";
import { Task } from "@/types/Task";
import { revalidatePath } from "next/cache";

export const getTasks = async () => {
  const client = await clientPromise;
  const db = client.db("task-flow");
  const data = await db.collection("task").find({}).toArray();
  const tasks = data.map((el) => ({
    id: el._id.toString(),
    title: el.title,
    completed: el.completed,
    description: el.description || "",
  }));
  return tasks;
};
export const createTask = async ({ title, description, completed }: Task) => {
  const client = await clientPromise;
  const db = client.db("task-flow");

  const result = await db.collection("task").insertOne({
    title,
    description,
    completed,
  });
  revalidatePath("/dashboard");
  return {
    id: result.insertedId.toString(),
    title,
    description,
    completed
  } as Task;
};
