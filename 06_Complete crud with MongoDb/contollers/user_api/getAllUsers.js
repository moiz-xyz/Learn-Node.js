import User from "../../modal/user.js";

 export const getAllusers =  async(req , res)  =>{
    try {
        const getusers = await User.find()
        return res.status(200).send({ status: 200, message: "Get specific User getting Successfully!", data: getusers })
    } catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}