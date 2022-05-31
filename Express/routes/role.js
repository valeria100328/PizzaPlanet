import express from "express";
const router = express.Router();
import role from "../controllers/roleController";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
//import validId from "../middlewares/validId.js";


router.post("/register", auth, admin, role.registerRole);

export default router;
