// import user from "../models/user.js";

// const registerUser = async (userData, passHash, roleId) => {
//     const userSchema = new user({
//         email: userData.email.toLowerCase(),
//         password: passHash,
//         role_id: roleId,
//         activated_in_db: true,
//     });

//     const result = await userSchema.save();
//     return result;
// };

// const existingUser = async (email) => {
//     const result = await user.findOne({ email: email.toLowerCase() });
//     return result;
// };

// export default {
//     registerUser,
//     existingUser,
// };
