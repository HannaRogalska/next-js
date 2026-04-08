"use server";

import clientPromise from "@/app/lib/mongodb";
import { Task } from "@/types/Task";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { unstable_cache } from "next/cache";

export const getTasks = unstable_cache(
  async () => {
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
  },
  ["tasks"],
  { revalidate: 60 },
);
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
    completed,
  } as Task;
};

export const deleteTaskDB = async (id: string) => {
  const client = await clientPromise;
  const db = client.db("task-flow");
  await db.collection("task").deleteOne({ _id: new ObjectId(id) });
  revalidatePath("/dashboard");
};

export const changeTask = async (id: string, { ...body }: Partial<Task>) => {
  const client = await clientPromise;
  const db = client.db("task-flow");
  await db
    .collection("task")
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { ...body } });
};
