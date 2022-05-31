// import role from "../models/role.js";

// const registerRole = async (roleData) => {
//     const roleSchema = new role({
//         name: roleData.name.toLowerCase(),
//         description: roleData.description.toLowerCase(),
//         code: roleData.code.toUpperCase(),
//         activated_in_db: true,
//     });

//     const result = await roleSchema.save();
//     return result;
// };

// const existingRole = async (code) => {
//     const result = await role.findOne({
//         code: code.toUpperCase(),
//     });
//     return result;
// };


export default {
    registerRole,
    existingRole,
};
