
import express from "express"

const app = express ();
const PORT = 3000; 

const users = [
    {
        id: 1,
        name: "Abdullah",
        email: 'ab@gmail.com'
    },
    {
        id: 2,
        name: "Ahmed",
        email: 'Ahmedh@gmail.com'
    },
    {
        id: 3,
        name: "Ali",
        email: 'alik@gmail.com'
    },
]

app.get("/" ,(req,res)=>{
res.send (" Hello I'm from CRUD Server")
})

// get users from api
app.get("/users", (req , res)=>{
res.send(users)
})

app.post('/', (req ,res)=>{
users.push({id : users.length +1 , ...req.body})
res.send ({message :"user added succsfully"})
})


app.listen(PORT ,()=>[
    console.log(`Server is running on http://localhost:${PORT}`)  
])
