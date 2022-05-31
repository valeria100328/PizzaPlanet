import express from "express";
import role from "../controllers/role.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
const router = express.Router();

//se necesita estar autenticado y ser admin
router.post("/register", auth, admin, role.registerRole); //check
router.get("/listRole", auth, admin, role.listRole);
router.get("/findRole/:_id", auth, admin, role.findRole);
router.put("/updateRole", auth, admin, role.updateRole);
router.delete("/deleteRole/:_id", auth, admin, role.deleteRole);

export default router;
