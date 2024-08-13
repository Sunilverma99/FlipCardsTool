
import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from 'mongoose';
import mysql2 from 'mysql2';

const configobj=process.env.MYSQL

 import authRouter from "./routes/auth.router.js"
 import flashCardRouter from "./routes/flashcard.router.js"

import cors from "cors";

dotenv.config();
const PORT =  5000;
const app = express();

const __dirname=path.resolve();

const mysqlConnection = mysql2.createConnection(configobj);

mysqlConnection.connect((err) => {
  if (!err) {
      console.log("Connected to MySQL");
  } else {
    console.log(err.message);
      console.log("Connection failed");
  }
});


app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`); 
});
app.use(express.static(path.join(__dirname,"/Frontend/dist")))
app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname,"Frontend","dist","index.html"))
});
app.use("/api",authRouter);
app.use("/api",flashCardRouter);
app.use((err,req,res,next)=>{
     const statusCode=err.statusCode ||500;
     const message=err.message || "Internal Server Error";
     res.json({
      success:false,
      statusCode:statusCode,
      message:message,
     })
});
export {mysqlConnection};