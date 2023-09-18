const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lecturerSetAttendanceSchema = new Schema({
    uniquecode: {
        type: String,
    },
    time: {
        type:String,
    },
}, {timestamps:true})

const LecturerSetAttendance = mongoose.model('LecturerSetAttendance',lecturerSetAttendanceSchema);
module.exports = LecturerSetAttendance;