"use server";
import clientPromise from "@/app/lib/mongodb";
import { User } from "@/app/types/User";
import { hash } from "bcrypt";
import { mkdir, writeFile } from "fs/promises";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import path from "path";
export const createUser = async ({ name, email, password }: User) => {
  try {
    const client = await clientPromise;
    const db = client.db("task-flow");
    const hashedPassword = await hash(password, 10);
    await db.collection("users").insertOne({
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
  const cleanName = file.name.replace(/\s+/g, "_").replace(/[()]/g, "");
  const uniqueName = `${Date.now()}-${cleanName}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
   await mkdir(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, uniqueName);
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  await writeFile(filePath, buffer);
  const avatarUrl = `/uploads/${uniqueName}`;
  const session = await getServerSession(authOptions);
  console.log(session?.user?.email);
  const client = await clientPromise;
  const db = client.db("task-flow");
  const result = await db
    .collection("users")
    .updateOne(
      { email: session?.user?.email },
      { $set: { avatar: avatarUrl } },
    );
};
