import express from "express";
const app2 = express()
const PORT2 = 4000;

app2.get ("/", ()=>{
    res.send("Hello from second sever using import and export from node js")
})

app2.listen(PORT2,()=>{
console.log(`The server is running from http://localhost:${PORT2}`);
})

