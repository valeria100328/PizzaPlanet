import express from "express";
<<<<<<< HEAD
import role from "../controllers/role.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
=======
>>>>>>> c56f1dcf7deef4468e20a878e3da28acc1e72bf1
const router = express.Router();
import role from "../controllers/roleController";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
//import validId from "../middlewares/validId.js";

<<<<<<< HEAD
//se necesita estar autenticado y ser admin
router.post("/register", auth, admin, role.registerRole); //check
router.get("/listRole", auth, admin, role.listRole);
router.get("/findRole/:_id", auth, admin, role.findRole);
router.put("/updateRole", auth, admin, role.updateRole);
router.delete("/deleteRole/:_id", auth, admin, role.deleteRole);
=======

router.post("/register", auth, admin, role.registerRole);
>>>>>>> c56f1dcf7deef4468e20a878e3da28acc1e72bf1

export default router;
