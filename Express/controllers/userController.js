import userService from "../services/user.js";
import roleService from "../services/role.js";
import bcrypt from "bcrypt";
import jwt from "../lib/jwt.js";

const registerUser = async (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.assingCode)
        return res.status(400).send({ message: "Datos incompletos" });

    const existingUser = await userService.existingUser(req.body.email);
    if (existingUser)
        return res.status(400).send({ message: "El usuario ya existe" });

    const passHash = await bcrypt.hash(req.body.password, 10);

    const roleId = await roleService.assignRole(req.body.assingCode);
    if (!roleId)
        return res
            .status(400)
            .send({ message: "No se pudo asignar un rol al usuario" });

    const result = await userService.registerUser(req.body, passHash, roleId);
    if (!result)
        return res.status(400).send({ message: "Error en el registro" });

    const BPPTKN22 = jwt.generateJwt(result);
    if (!BPPTKN22)
        return res.status(500).send({ message: "Error en el registro" });

    return res.status(200).send({ BPPTKN22 });
};



export default {
    registerUser,
};
