import User from "../../modal/user.js";

 export const getUserByuserename =  async(req , res)  =>{
    try {
        const getUserByUsername = await User.findOne({username : req.query.username})
        return res.status(200).send({ status: 200, message: "Get specific User getting Successfully!", data: getUserByUsername })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}