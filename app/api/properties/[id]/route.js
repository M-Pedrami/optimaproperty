import ConnectDB from "@/config/database";
import Property from "@/models/Property";

export async function GET(req, { params }) {
  try {
    await ConnectDB();
    const { id } = params;
    const property = await Property.findById(id);
    if (!property) {
      return Response.json(
        { message: "No Properties found with this id" },
        { status: 500 }
      );
    }
    return Response.json({ property }, { status: 200 });
  } catch (error) {
    console.log("Error from Get singlie Property");
    return Response.json({ message: "Something Went Wrong" }, { status: 500 });
  }
}
