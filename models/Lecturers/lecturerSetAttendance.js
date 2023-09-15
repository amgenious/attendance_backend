const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lecturerSetAttendanceSchema = new Schema({
    unique_code: {
        type: String,
    },
    time: {
        type:TimeRanges,
    },
}, {timestamps:true})

const LecturerSetAttendance = mongoose.model('LecturerSetAttendance',lecturerSetAttendanceSchema);
module.exports = LecturerSetAttendance;