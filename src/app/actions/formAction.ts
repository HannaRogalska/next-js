"use server";
import { Todo } from "@/types/todo";


let todo: Todo[] = [
  { title: "First", id: 1, completed: false, userId: 43 },
  { title: "Second", id: 2, completed: false, userId: 45 },
];
export async function getTodos() {
  return todo;
}
export const createPost = async (formData: FormData) => {
  const title = formData.get("title")?.toString() || "";
  const id = Math.floor(Math.random() * 1000000);
  const userId = Math.floor(Math.random() * 1000000);
  const completed = false;
    todo.push({ title, completed, id, userId });
    console.log(todo);
};
export const deletePost = async (formData: FormData) => {
  const id = formData.get("id")?.toString() || "";
  
    todo = todo.filter((el) => el.id !== Number(id));
    console.log(todo);
};

