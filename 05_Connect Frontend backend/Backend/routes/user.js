import express from  "express"
const router = express.Router();

const users = [
    {
        id: 1,
        name: "Jhon",
        email: 'jhon@gmail.com'
    },
    {
        id: 2,
        name: "Smith",
        email: 'smith@gmail.com'
    },
    {
        id: 3,
        name: "Clerk",
        email: 'clerk@gmail.com'
    },
]

router.use("/" , (req,res)=>{
res.status(200).send(users)
})

export default router