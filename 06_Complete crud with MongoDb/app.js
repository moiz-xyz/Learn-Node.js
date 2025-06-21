import express from "express"
import 'dotenv/config'
import router from "./routes/index.js";

import connectDB from "./db/db.js";
const app = express();

connectDB()

const PORT = process.env.PORT || 5000 ; 
app.use(express.json())

app.use("/api" , router)

app.get("/", (req , res ) =>{
res.send("Hello from node js server") ;
})

app.listen(PORT , ()=>{
 console.log(`I m running on http://localhost:${PORT}`);
})