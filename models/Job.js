const mongoose = require('mongoose');
const validator = require('validator');
const {ObjectId} = mongoose.Schema.Types;


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
        name: String,
        contactPoint: String,
        email: {
            type: String,
            validate: [validator.isEmail, 'Provide a valid Email'],
            trim: true,
            lowercase: true,
            reequired: [true, 'Email is requied']
        },
        telephone: {
            type: String,
            validate: [validator.isMobilePhone, 'Please provide a valid contact number']
        },
        url: String
    },
    jobId: [{
            type: ObjectId,
            ref: "user",
            requied: true
    }],
    jobType: {
        type: String,
        required: true,
        trim: true,
    },
    estimatedSalary: Number,
    jobLocation: String,
    // age: {
    //     type: Number,
    //     min: [21, 'Age should be more than 21 years'],
    //     max: [21, 'Age should be less than 55 years']
    // },
    experience: String,
    gender: {
        enum: ['male', 'female']
    },
    applicationDate: Date,
});



const Job = mongoose.model('Job', jobSchema);



module.exports = Job;