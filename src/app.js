import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express();

//this like middle where we pass the url and access of url from
 app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials  : true
 }))
 //settings data comes from any from 
app.use(express.json({limit : "16kb"}))
//url se special cherecter aata h like space 
app.use(express.urlencoded({extended : true, limit: "16kb"}))
//kuchh bi asset ya images public folder me rakhna 
app.use(express.static("public"))
//for cookies ko use krna 
app.use(cookieParser())


export { app };
