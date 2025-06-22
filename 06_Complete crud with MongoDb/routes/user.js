import express from "express"
import { CreateUser , loginuser , getUserByuserename, getAllusers } from "../contollers/index.js";

const router = express.Router();

router.post("/signup", CreateUser);
router.post("/login", loginuser);
router.get("/user" , getUserByuserename);
router.get("/users" , getAllusers);

export default router