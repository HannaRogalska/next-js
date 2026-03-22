import clientPromise from "@/app/lib/mongodb";
import { Task } from "@/types/Task";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const client = await clientPromise;
  const db = client.db("task-flow");
  const task = await db.collection("task").find({}).toArray()
  console.log(task);
  return NextResponse.json(task);
};
export const POST = async (request: NextRequest) => {
  const task: Task = await request.json();
  const client = await clientPromise;
  const db = client.db("task-flow");
  const result = await db.collection("task").insertOne(task);
  return NextResponse.json({ success: true, id: result.insertedId });
};
