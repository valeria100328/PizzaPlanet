import express from "express";
import user from "../controllers/user.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
const router = express.Router();

router.post("/register", user.registerUser); // Registra exitosamente con rol admin o client
router.post("/login", user.login); // Inicia sesion y devuelve token auth

//se necesita estar autenticado
router.post("/registerAdminUser", auth, admin, user.registerAdminUser); //check
router.get("/listUsers/:name?", auth, admin, user.listAllUser); //check
router.get("/getRole/:email", auth, user.getUserRole); // check admin
router.get("/findUser/:_id", auth, admin, user.findUser); //check
router.put("/updateUser", auth, admin, user.updateUser);
router.put("/deleteUser", auth, admin, user.deleteUser);

export default router;

