import User from "../../modal/user.js";
import { signupSchema } from "../../validators/uservalidors.js";
import bcrypt from "bcryptjs";
import "dotenv/config";

export const CreateUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userexists = await User.findOne({ email });

    if (userexists) {
      return res.status(409).send({
        status: 409,
        message: "User already exits",
      });
    }
    const password_in_Hash = await bcrypt.hash(password, 10);

    await signupSchema.validateAsync(req.body);

    const createUser = await User.create({
      username: username,
      email: email,
      password: password_in_Hash,
    });

    transporter.sendMail({
      to: createUser.email,
      from: process.env.EMAIL_USER, 
      subject: "🎉 Welcome  You're In!",
      text: `Hi ${createUser.username},

Welcome!

We're thrilled to have you on board. Your account has been successfully created and you're now part of a growing community that values quality, trust, and innovation.

Stay tuned for exciting updates, new features, and exclusive content coming your way!

If you ever need help, just hit reply — we're here for you.

Best regards,  

`,
    });

    return res.status(409).send({
      status: 200,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};
