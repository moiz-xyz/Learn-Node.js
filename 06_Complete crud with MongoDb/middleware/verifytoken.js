import jwt from 'jwt'
import "dotenv/config"

const verifytoken = (req , res , next)=>{
    const {authorize} = req.headers;
    const token = authorize.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
        if (err) {
            return res.status(401).send({ status: 401, message: "Unauthorized", err })
        }
        return next()

    });
}

export default verifytoken