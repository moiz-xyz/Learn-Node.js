import express from "express"
import { PRODUCTS } from "../constant.js";

const router = express.Router();

router.get("/",(res , req)=>{
res.status(200).res.send(PRODUCTS)
})

export default router