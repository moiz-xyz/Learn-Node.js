import express from "express"

const app = express();
const PORT = 3000

app.get( ( res ,req)=>{
res.send ('Hello')
})

app.listen(PORT , ()=>{
    console.log(`I m running on http://localhost:${PORT}`);
})
