const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lecturerSignupSchema = new Schema({
    username:{
        type:String,
    },
    email: {
        type: String,
 
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },
}, {timestamps:true})

const LecturerSignup = mongoose.model('LecturerSignup', lecturerSignupSchema);
module.exports = LecturerSignup;