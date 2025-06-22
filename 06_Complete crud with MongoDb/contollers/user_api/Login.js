import User from "../../modal/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import "dotenv/config"

export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    if (!(email && password)) {
      return res
      .status(409)
      .send({ status: 409, message: "Email or Password Required" });
    }

    //  check kar rha ha ka usee exits kr rha ha ka nh
    const existedUser = await User.findOne({ email }).then((res) =>
      res.toObject()
    );
    if (!existedUser) {
      return res.status(402).send({ status: 402, message: "User Not found!" });
    }

    const comparepassword = await bcrypt.compare(
      password,
      existedUser.password
    );

    if (!comparepassword) {
      return res
        .status(402)
        .send({ status: 402, message: "Incorrect Password!" });
    }
    const token = jwt.sign({
      _id : existedUser._id ,
      _email :existedUser.email ,
    } , process.env.SECRET_KEY, { expiresIn: "1h" })
    // delete existedUser.password  

 return res.status(200).send({ status: 200, message: "User logged in Successfully!", 
  data: existedUser, token: token 
})
}
 catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
