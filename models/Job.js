const mongoose = require('mongoose');
const validator = require('validator');


const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a Name for job'],
        trim: true,
        minlength: [3, 'Name must be at least up to 3 character'],
        maxlength: [100, 'Name is too large'],
        unique: [true, 'Name mus be unique'],
        lowercase: true
    },
    description: String,
    educationRequirements: String,
    companyInfo: {
        type: String,
        required: true,
        name: String,
        contactPoint: String,
        email: {
            type: String,
            validate: [validator.isEmail, 'Provide a valid Email'],
            trim: true,
            lowercase: true,
            unique: [true, 'Please provide a unique Emial'],
            reequired: [true, 'Email is requied']
        },
        telephone: {
            type: String,
            validate: [validator.isMobilePhone, 'Please provide a valid contact number']
        },
        url: String
    },
    // jobType: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    estimatedSalary: Number,
    jobLocation: String,
    gender: {
        enum: ['male', 'female']
    },
    // age: {
    //     type: Number,
    //     min: [21, 'Age should be more than 21 years'],
    //     max: [21, 'Age should be less than 55 years']
    // },
    experience: String,
    // imgURL: {
    //     type: String,
    //     required: true,
    //     validate: [validator.isURL, 'Wrong url']
    // },
    applicationDate: Date,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
});



const Job = mongoose.model('Job', jobSchema);



module.exports = Job;