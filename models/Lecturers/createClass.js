const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createClassSchema = new Schema({
    classname:{
        type: String,
        
    },
    coursename: {
        type: String,
        
    },
    level: {
        type: String,

    },
    lecturername:{
        type:String,
        
    },
    numberofstudents: {
        type: String,    
    },
 
}, {timestamps:true})

const CreateClass = mongoose.model('CreateClass', createClassSchema);
module.exports = CreateClass;