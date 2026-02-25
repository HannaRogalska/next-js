"use client";
import { createPost } from "@/app/actions/formAction";
export const alertFunction = async (formData: FormData) => {
  try {
    await createPost(formData);
    alert("Note created!");
  } catch (error) {
    alert("Error: " + error);
  }
};
