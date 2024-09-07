const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const route = require("./routes/routes");
const bodyParser= require("body-parser");
const  cors= require("cors");






app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));



const PORT= process.env.PORT || 5500;
const URI = process.env.MONGODB_URI;

mongoose.connect(URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})
const database = mongoose.connection;
database.on("error",(error)=>{
  console.error("MongoDb connection error: ",error);
});

database.once("open",()=>{
  console.log("Connected to MongoDB");
 })


// use the app route 
app.use(route)






app.listen(PORT,()=>{
  console.log(`The server is listening on ${PORT}`);
})