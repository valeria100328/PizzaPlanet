import user from "../models/user.js";

const registerUser = async (userData, passHash, roleId) => {
    const userSchema = new user({
        name: userData.name,
        email: userData.email,
        password: passHash,
        roleId: roleId._id,
        dbStatus: true,
    });

    const result = await userSchema.save();
    return result;
};

const existingUser = async (userData) => {
    const existing = await user.findOne({ email: userData });
    return existing;
};

const validateLogin = async (userEmail) => {
    const validateUser = await user.findOne({
        email: userEmail,
    });
    return validateUser;
};

export default {
    registerUser,
    existingUser,
    validateLogin,
};
