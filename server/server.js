//import
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

//init express
const app = express();

//use JSON in our server
app.use(express.json());

// config cors
app.use(cors());

// PORT
const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server API is runnon on port ${PORT}`);
});

// routing system

// root route
// route --> http method GET
//  READ data
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server, we are happy to serve'ya" });
});

// ===============Additonal Routes Below=========================
