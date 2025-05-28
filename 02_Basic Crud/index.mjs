
import express from "express"

const app = express ();
app.use(express.json());

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

//  post users form postman
app.post('/', (req ,res)=>{
users.push({id : users.length +1 , ...req.body})
res.send ({message :"user added succsfully"})
})

// delete function
app.delete("/users/:id" , ( req, res)=>{
    const getUserId = parseInt(req.params.id)
    const index = users.findIndex(users => users.id === getUserId)
    users.splice(index , 1)
   res.send({ message: "User deleted successfully" });
}) 

// update function
app.put("/users/:id" , (req , res)=>{
    const getId = parseInt(req.params.id)
    const index = users.findIndex(users => users.id === getId);
     users.splice(index, 1, {id: Number(req.params.id), ...req.body})
    res.send({ message: "User Update Successfully" })
})

app.listen(PORT ,()=>[
    console.log(`Server is running on http://localhost:${PORT}`)  
])
