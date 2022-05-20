import jwt from "../lib/jwt.js";

const auth = async (req, res, next) => {
    let token = req.header("Auth");
    if (!token)
        return res.status(400).send({ message: "Usuario no autenticado" });

    token = token.split(" ")[1];
    if (!token)
        return res.status(400).send({ message: "Usuario no autorizado" });

    try {
        req.user = jwt.verifyToken(token);
        next();
    } catch (e) {
        return res.status(400).send({ message: "Usuario no autorizado" });
    }
};

export default auth;
