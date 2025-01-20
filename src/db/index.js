import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
//because is an another continent
const connectDB = async () => {
  try {
    //mongoose return krta hai object 
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n Mongodb Connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MOngodb connection error", error);
    process.exit(1);//process exit krta h jo current chal rha h
    
  }
};
export default connectDB;
