console.log('server.js is being executed');
import express from 'express';
//if we want to use import then we have to add "type": "module" in package.json file
//const express = require("express"); //this is common js module system
const app = express();

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});