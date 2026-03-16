import { NextResponse } from "next/server";

const db = [
  { title: "Make a design dashboard", completed: false, id: 1 },
  { title: "Configure the database", completed: true, id: 2 },
  { title: "Add authorization", completed: false, id: 3 },
];

export const GET = async () => {
    return NextResponse.json(db);
}