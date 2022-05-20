import express from "express";
import role from "../controllers/roleController";
const router = express.Router();

router.post("/register", role.registerRole);

export default router;
