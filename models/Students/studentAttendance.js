const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentAttendanceSchema = new Schema({
    uniquecode: {
        type: String,
    },
    indexnumber: {
        type: String,
    }
}, {timestamps:true})

const StudentAttendance = mongoose.model('StudentAttendance', studentAttendanceSchema);
module.exports = StudentAttendance;