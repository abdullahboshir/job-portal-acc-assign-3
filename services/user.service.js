const User = require("../models/user");


exports.userCreateService = async (userInfo) => {
const user = await User.create(userInfo);
return user;
};


exports.findUserByEmail = async (userEmial) => {
const result = await User.findOne({email: userEmial});
return result;
}