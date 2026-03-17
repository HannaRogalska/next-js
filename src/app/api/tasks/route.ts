
import { NextRequest, NextResponse } from "next/server";

const db = [
  { title: "Make a design dashboard", completed: false, id: 1 },
  { title: "Configure the database", completed: true, id: 2 },
  { title: "Add authorization", completed: false, id: 3 },
];

type propPut = {
  params: {
    id: string
  }
}
export const GET = (request: NextRequest) => {
  return NextResponse.json(db);
};

export const PUT = async (request: NextRequest) => {
  const body = await request.json();
  const updatedDb = db.map((e) => {
    return e.id === 1 ? { ...e, ...body } : e;
  });
  console.log("UPDATED:", updatedDb);
  return NextResponse.json(updatedDb);
};
  
