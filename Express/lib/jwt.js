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
            process.env.SK_JWT
        );
    } catch (e) {
        return jwToken;
    }
};

const verifyToken = (token) => {
    const verify = jwt.verify(token, process.env.SK_JWT);
};

export default { generateJwt, verifyToken };
