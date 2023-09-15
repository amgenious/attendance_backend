const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSignupSchema = new Schema({
    username:{
        type:String,
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
    
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    },
}, {timestamps:true})

const StudentSignup = mongoose.model('StudentSignup', studentSignupSchema);
module.exports = StudentSignup;