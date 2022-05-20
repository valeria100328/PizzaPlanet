import role from "../models/role.js";

const registerRole = async (roleData) => {
    const roleSchema = new role({
        name: roleData.name,
        description: roleData.description,
        assingCode: roleData.assingCode,
        dbStatus: true,
    });

    const result = await roleSchema.save();
    return result;
};

const existingRole = async (roleData) => {
    const existing = await role.findOne({ name: roleData });
    return existing;
};

const assignRole = async (roleData) => {
    let roleId = "";
    if (roleData === "ARSTD")
        roleId = await role.findOne({ roleCode: roleData });
    return roleId;
};

export default { registerRole, existingRole, assignRole };
