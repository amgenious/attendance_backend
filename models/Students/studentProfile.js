const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentProfileSchema = new Schema({
    index_number: {
        type: String,
    },
    fullname: {
        type: String,
    },
    picture:{
        type: String,
    }
}, {timestamps:true})

const StudentProfile = mongoose.model('StudentProfile', studentProfileSchema);
module.exports = StudentProfile;