import express from "express"
import router from "./routes/main.js";
import cors from "cors"

const app = express ();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173" // ✅ React ka frontend URL
}))

const PORT = 3000;

app.use("/api", router)
app.get("/", (req,res)=> {
res.send("Hello from node js server")
})

app.listen(PORT, ()=>{
     console.log(`Sever is running on http://localhost:${PORT}`);
})
