import ConnectDB from "@/config/database";
import Property from "@/models/Property.js";
import { getSessionUser } from "@/utils/getSessionUser";
import cloudinary from "@/config/cloudinary";

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

export async function POST(req) {
  try {
    await ConnectDB();
    const { userId } = await getSessionUser();

    const formData = await req.formData();
    //access all values from amenities and images array
    const amenities = formData.getAll("amenities");
    const images = formData
      .getAll("images")
      .filter((image) => image.name !== "");

    const propertyData = {
      owner: userId,
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      square_feet: formData.get("square_feet"),
      amenities,
      rates: {
        weekly: formData.get("rates.weekly"),
        monthly: formData.get("rates.monthly"),
        nightly: formData.get("rates.nightly"),
      },
      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },
    };
    // Access the uploaded files from the form data
    const imageUploadPromises = [];

    for (const image of images) {
      // Assuming image is a File object, extract the file data
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);

      // Convert the image data to base64
      const imageBase64 = imageData.toString("base64");

      // Upload the image data as a base64 string to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: "Optima-Property",
        }
      );

      imageUploadPromises.push(result.secure_url);
    }

    // Wait for all image uploads to complete
    const uploadedImages = await Promise.all(imageUploadPromises);

    // Add the uploaded images to the propertyData object
    propertyData.images = uploadedImages;
    console.log(propertyData);

    const newProperty = await Property.create(propertyData);

    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`
    );
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
