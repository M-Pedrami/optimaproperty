import ConnectDB from "@/config/database";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await ConnectDB();
    return  Response.json({message:"Hello World"}, { status: 200 });
  } catch (error) {
    console.log(error);
    return  Response.json({message:"Something Went Wrong"}, { status: 500 });
  }
};
