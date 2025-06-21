import User from "../../modal/user";
import bcrypt from "bcryptjs";

export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userNotFound = await User.findOne({ email }).then((res) =>
      res.toObject()
    );

    if (!(email && password)) {
      return res
        .status(409)
        .send({ status: 409, message: "Email or Password Required" });
    }
    if (!userNotFound) {
      return res.status(402).send({ status: 402, message: "User Not found!" });
    }

    const comparepassword = await bcrypt.compare(
      password,
      existedUser.password
    );

    if (!passwordCompare) {
      return res
        .status(402)
        .send({ status: 402, message: "Incorrect Password!" });
    }
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
