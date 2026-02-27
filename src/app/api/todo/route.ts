import dbConnect from "@/lib/mongodb"
import Todo from "@/models/Todo"
import { NextResponse } from "next/server";


export const GET = async() => {
    await dbConnect()

    const getAllTodo = await Todo.find()
    return NextResponse.json(getAllTodo);
}