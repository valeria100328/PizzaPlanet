import userService from "../services/user.js";
import bcrypt from "bcrypt";
import jwt from "../lib/jwt.js";


const login = async (req, res) => {
    if (!req.body.email || !req.body.password)
        return res.status(400).send({ message: "Datos incompletos" });
    const validateLogin = await userService.validateLogin(req.body.email);
    if (!validateLogin)
        return res
            .status(400)
            .send({ message: "Correo o contraseña incorrecta" });
    const passHash = await bcrypt.compare(
        req.body.password,
        validateLogin.password
    );
    if (!passHash)
        return res
            .status(400)
            .send({ message: "Correo o contraseña incorrecta" });
    const token = jwt.generateJwt(validateLogin);
    if (!token)
        return res.status(500).send({ message: "Error en el registro" });
    return res.status(200).send({ token });
};

export default {
    login,
};
