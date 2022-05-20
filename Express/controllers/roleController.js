import roleService from "../services/role.js";

const registerRole = async (req, res) => {
    if (!req.body.name || !req.body.description || !req.body.assingCode)
        return res.status(400).send({ message: "Datos incompletos" });

    const existingRole = await roleService.existingRole(req.body.name);
    if (existingRole)
        return res.status(400).send({ message: "El rol ya existe" });

    const result = await roleService.registerRole(req.body);
    return !result
        ? res.status(500).send({ message: "Error registrando el rol" })
        : res.status(200).send({ result });
};

export default { registerRole };
