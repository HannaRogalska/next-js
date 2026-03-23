import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
export const getTasks = async () => {
  const client = await clientPromise;
  const db = client.db("task-flow");
const task = await db.collection("task").find({}).toArray()
  console.log(task);
  return NextResponse.json(task);
};
