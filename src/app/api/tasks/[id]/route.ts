
import { NextRequest, NextResponse } from "next/server";

const db = [
  { title: "Make a design dashboard", completed: false, id: 1 },
  { title: "Configure the database", completed: true, id: 2 },
  { title: "Add authorization", completed: false, id: 3 },
];


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
export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const updatedDb = db.filter((e) => e.id !== Number(params.id));

  console.log("DELETE:", updatedDb);

  return NextResponse.json(updatedDb);
};
  
