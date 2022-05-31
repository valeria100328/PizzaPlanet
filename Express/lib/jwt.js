import jwt from "jsonwebtoken";
import moment from "moment";

const generateJwt = (data) => {
    let jwToken = "";
    try {
        return jwt.sign(
            {
                _id: data._id,
                name: data.name,
                roleId: data.roleId,
                iat: moment().unix(),
            },
            process.env.JWT
        );
    } catch (e) {
        return jwToken;
    }
};

const verifyToken = (token) => {
    let verify = "";
    try {
        return (verify = jwt.verify(token, process.env.JWT));
    } catch (e) {
        return verify;
    }
};

export default { generateJwt, verifyToken };
