import express from "express";  
import { PRODUCTS  } from "../constant.js";

const router = express.Router()
 
router.use("/", (req,res)=>[
    res.status(200).send(PRODUCTS)
])

export default router