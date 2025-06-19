import express from "express"
import users from "./user.js";
import Products from "./Product.js"

const router = express.Router();
router.use('/product', Products)
router.use('/users', users )

export default router