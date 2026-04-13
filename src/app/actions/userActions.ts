"use server";
import clientPromise from "@/app/lib/mongodb";
import { User } from "@/app/types/User";
import { hash } from "bcrypt";
import { writeFile } from "fs/promises";
import path from "path";
export const createUser = async ({ name, email, password }: User) => {
  try {
    const client = await clientPromise;
    const db = client.db("task-flow");
    const hashedPassword = await hash(password, 10);
    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
    });
    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false, error: "Something went wrong" };
  }
};
export const uploadAvatar = async (formData: FormData) => {
  const entry = formData.get("avatar");

  if (!(entry instanceof File)) {
    throw new Error("File not found");
  }

  const file = entry;
  
  const uniqueName = `${Date.now()}-${file.name}`
  const uploadDir = path.join(process.cwd(), "src", "public", "uploads");
  const filePath = path.join(uploadDir, uniqueName);
  console.log(file);
  console.log(uniqueName);
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  console.log(buffer);
  await writeFile(filePath, buffer);
   return `/uploads/${uniqueName}`;
};
