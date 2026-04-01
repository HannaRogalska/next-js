"use server";
import clientPromise from "@/app/lib/mongodb";
import { User } from "@/types/User";
import { hash } from "bcrypt";

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
