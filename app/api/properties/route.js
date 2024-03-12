import ConnectDB from "@/config/database";
import Property from "@/models/Property.js";

export async function GET(req) {
  try {
    await ConnectDB();
    const properties = await Property.find();
    return Response.json({ properties }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something Went Wrong" }, { status: 500 });
  }
}
