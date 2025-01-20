// require('dotenv').config().config({path: "./env"})
//upar vale dotenv se bhi kam chal sakta  hai but best code consistency ke lie import krna hai
// import cotenv from "dotenv"

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MOngo db connection Faild !!!", err);
  });

/*

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("Error", () => {
      throw error;
    });
    
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
})();
*/
