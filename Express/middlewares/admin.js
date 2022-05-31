import role from "../models/role.js";

const admin = async (req, res, next) => {
<<<<<<< HEAD
    const adminRole = await role.findById(req.user.roleId);
    if (!adminRole) return res.status(400).send({ message: "Role no found" });

    return adminRole.name === "admin"
        ? next()
        : res.status(400).send({ message: "Unauthorized user" });
=======
  const adminRole = await role.findById(req.user.roleId);
  if (!adminRole) return res.status(400).send({ message: "Role no found" });

  return adminRole.name === "admin"
    ? next()
    : res.status(400).send({ message: "Unauthorized user" });
>>>>>>> c56f1dcf7deef4468e20a878e3da28acc1e72bf1
};

export default admin;
