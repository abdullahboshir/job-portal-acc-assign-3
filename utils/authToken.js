const jwtToken = require('jsonwebtoken');


exports.generateToken = (userInfo) => {
const payload = {
    email: userInfo.email,
    role: userInfo.role
};

const token = jwtToken.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: '10days'
});
return token;
};