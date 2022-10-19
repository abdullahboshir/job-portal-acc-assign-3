const { userCreateService, findUserByEmail } = require("../services/user.service");
const { generateToken } = require("../utils/authToken");



exports.signup = async (req, res) => {
    try {
        const user = await userCreateService(req.body);
        const {password: bdf, ...others} = user.toObject();
        res.status(200).json({
            status: 'success',
            message: 'successfully created the new account',
            data: others
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "couln'd create the account",
            error: error.message
        })
    }
};


exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(401).json({
                status: 'faile',
                message: "please provide your Email and Password"
            })
        };

        const user = await findUserByEmail(email);

        if(!user){
            return res.status(401).json({
                status: 'fail',
                error: 'no user found please an account'
            })
        };

        console.log('user', user.password)
        const isPasswordOk = user.comparePassword(password, user.password);


        if(!isPasswordOk){
            return res.status(403).json({
                status: 'fail',
                error: 'email or password doesn\'t match'
            })
        };

        if(user.status != 'active'){
            return res.status(401).json({
                status: 'fail',
                error: 'Your account not active yet. please check your mail for active'
            })
        };


        const token = generateToken(user);

        const {password: pwd, ...others} = user.toObject();

        res.status(200).json({
            status: 'success',
            message: 'successfully login the account',
            data: {
                others,
                token
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "couln'd login the account",
            error: error.message
        })
    }
};