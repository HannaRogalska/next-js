"use server";
import Todo from "@/models/Todo";
import { Todos } from "@/types/todo";
import dbConnect from "@/lib/mongodb";


let todo: Todos[] = [
  { title: "First", id: 1, completed: false, userId: 43 },
  { title: "Second", id: 2, completed: false, userId: 45 },
];
export async function getTodos() {
  return todo;
}
export const createPost = async (formData: FormData) => {
  await dbConnect();
  const title = formData.get("title")?.toString() || "";
  
  const id = Math.floor(Math.random() * 1000000);
  const userId = Math.floor(Math.random() * 1000000);
  const completed = false;
    todo.push({ title, completed, id, userId });
  console.log(todo);
  await Todo.create({ text: title, done: false });
};
export const deletePost = async (formData: FormData) => {
  const id = formData.get("id")?.toString() || "";
  
    todo = todo.filter((el) => el.id !== Number(id));
    console.log(todo);
};

