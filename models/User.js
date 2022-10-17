const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const usersShema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide a first name'],
        trim: true,
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [100, 'Name is too large']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide a last name'],
        trim: true,
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [100, 'Name is too large']
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'Provide a valid Email'],
        trim: true,
        lowercase: true,
        unique: [true, 'Please provide a unique Emial'],
        reequired: [true, 'Email is requied']
    },
    password: {
        type: String,
        validate: {
            validator: (value) =>
                validator.isStrongPassword(value, {
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1
                }),
            message: 'Password {VALUE} is not storong enough'
        }
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: 'Password doesn\'t match'
        }
    },
    role: {
        type: String,
        enum: ['admin', 'manager', 'candidate'],
        default: 'candidate'
    },
    contactNumber: {
        type: String,
        validate: [validator.isMobilePhone, 'Please provide a valid contact number']
    },
    location: {
        type: String,
    },
    gender: {
        enum: ['male', 'female']
    },
    age: {
        type: Number,
        min: [21, 'Age should be more than 21 years'],
        max: [21, 'Age should be less than 55 years']
    },
    experience: Number,
    imgURL: {
        type: String,
        required: true,
        validate: [validator.isURL, 'Wrong url']
    },
    applicationDate: Date,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
},
{timestamps: true}
);


usersShema.pre("save", function (next) {
    const password = this.password;
    const hashedPassword = bcrypt.hashSync(password);

    this.password = hashedPassword;
    this.password = undefined

    next()
});


usersShema.methods.comparePassword = function (password, hash) {
    const isPasswordValid = bcrypt.compareSync(password, hash);
    return isPasswordValid;
};


const User = mongoose.model('User', usersShema);


module.exports = User;

