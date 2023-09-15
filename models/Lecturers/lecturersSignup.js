const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const lecturerSignupSchema = new Schema({
    username:{
        type:String,
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    },
}, {timestamps:true})

const LecturerSignup = mongoose.model('LecturerSignup', lecturerSignupSchema);
module.exports = LecturerSignup;