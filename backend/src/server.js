import express from 'express';
/*if we want to use import then we have to add "type": "module" in package.json file
// const express = require("express"); //this is common js module system
//importing routes*/
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);
//our simple custom middleware
//app.use((req,res,next) => {
//  console.log(`Req method is ${req.method} & Re URL is ${req.url}`);
//  next();
//});

app.use("/api/notes", notesRoutes);

//connect to db and then start server
connectDB().then(()=>{
  //test server
  app.listen(PORT, () => {
    console.log("Server started on PORT:",PORT);
  });

});




