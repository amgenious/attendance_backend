const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentLoginSchema = new Schema({
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

const StudentLogin = mongoose.model('StudentLogin', studentLoginSchema);
module.exports = StudentLogin;