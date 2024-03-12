import mongoose from "mongoose";

let connected = false;

const ConnectDB = async () => {
  //only accepts queries for the fields that are defined in the schema
  mongoose.set("strictQuery", true);

  //check if the database is already connected
  if (connected) {
    console.log(`MongoDB is already connected`);
    return;
  }

  //if not connected, then establish connection
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log(`MongoDB Connected: ${connect.connection.name} `);
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
};

export default ConnectDB;
