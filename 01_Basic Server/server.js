import express from 'express'

const app = express();
const PORT = 5000;

app.get('/', (req,res)=>{
    res.send('Hi im  again from nodemon server');
})

app.listen(PORT , ()=>{
    console.log(`I'm running from nodemon sever http://localhost:${PORT}`);  
})