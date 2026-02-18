"use server";
import { Todo } from "@/types/todo";
import { nanoid } from "nanoid";


let todo: Todo[] = [
  { title: "First", id: 1, completed: false, userId: 43 },
  { title: "Second", id: 2, completed: false, userId: 45 },
];
export async function getTodos() {
  return todo;
}
export const createPost = async (formData: FormData) => {
  const title = formData.get("title")?.toString() || "";
  const id = 34
  const completed = false;
  const userId = 12
    todo.push({ title, completed, id, userId });
};


