console.log("hello backend"); // showing in  termianl console

// import express from "express"  since express js allows us ES5 verion therefore


//  simple sever with es 5 version
const express = require('express');

const app = express()
const PORT = 3000;

// Test route
app.get("/", (req,res)=> {
res.send("Hello from node js server")
})

app.listen (PORT ,()=>{
     console.log(`Sever is running on http://localhost:${PORT}`);
})


