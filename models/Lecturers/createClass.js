const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createClassSchema = new Schema({
    classname:{
        type: String
    },
    coursename: {
        type: String,
    },
    level: {
        type: String,
    },
    lecturer_name:{
        type:String
    },
    numberofstudents: {
        type: Number,
    },
 
}, {timestamps:true})

const CreateClass = mongoose.model('CreateClass', createClassSchema);
module.exports = CreateClass;