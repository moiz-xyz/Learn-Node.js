import express from "express";
import "dotenv/config"

const app = express();

const PORT = process.env.PORT

app.use("/api" , router)

app.get("/" , (req , res)=>{
    res.send("Server is running")
})

app.listen(PORT , ()=>{
     console.log(`Server is running on http://localhost:${PORT}`);
})