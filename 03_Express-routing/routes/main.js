import express from  "express";

import user from "./user.js"
import product from "./products.js"

const router = express.Router();
router.use("/users" , user)
router.use("/product" , product)

export default router