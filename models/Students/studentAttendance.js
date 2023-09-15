const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentAttendanceSchema = new Schema({
    unique_code: {
        type: String,
    },
    index_number: {
        type: String,
    },
    picture:{
        type: String,
    }
 
}, {timestamps:true})

const StudentAttendance = mongoose.model('StudentAttendance', studentAttendanceSchema);
module.exports = StudentAttendance;