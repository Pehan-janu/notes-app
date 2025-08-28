import express from 'express';
/*if we want to use import then we have to add "type": "module" in package.json file
// const express = require("express"); //this is common js module system
//importing routes*/
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
connectDB();

app.use("/api/notes", notesRoutes);

//test server
app.listen(PORT, () => {
  console.log("Server started on PORT:",PORT);
});

