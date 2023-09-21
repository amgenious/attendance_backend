const createclass = require("../models/Lecturers/createClass")
const LecturerSignup = require("../models/Lecturers/lecturersSignup")
const Attendance = require("../models/Lecturers/lecturerSetAttendance")
const PDF = require('../models/Students/studentAttendance')
const StudentProfile =  require ("../models/Students/studentProfile")


exports.lecturerSignup = async (req,res) => {
    const { username, email, password } = req.body;

    try{
        await LecturerSignup.insertMany({username, email, password})    
        res.json("created")
           
    }
    catch(err){
        res.send(err)
    }
}

exports.lecturerLogin = async (req,res) => {
    const {username,email, password} = req.body;
    try{
        const check = await LecturerSignup.findOne({username:username, email:email,password:password})
        if(check.password === password){
           
            res.json('exist')
        }
        else{
          
            res.json("notexist")
        }
    }
    catch (err){
        
        res.json("notexisted")
    }
}

exports.createclass = async (req,res) => {
    const {classname, coursename, level, lecturername, numberofstudents} = req.body;
    try{
        await createclass.insertMany({classname, coursename, level, lecturername, numberofstudents})
        res.json('created')
    }
    catch (err){
        console.log(err)
    }
}
exports.getclass = async (req,res) => {
    createclass.find()
    .sort({ createdAt: -1 })
    .then(data => res.send(data))
}

exports.setattendance = async (req,res) => {
    const {uniquecode, time} =req.body;
    try{
        await Attendance.insertMany({uniquecode,time})
        res.json('created')
    }
    catch(err){
        console.log(err)
    }
}

exports.searchpdf = async (req,res)=>{
    const query = req.query.q;
  try {
    const results = await PDF.find({uniquecode:query});
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
exports.searchstudent = async (req,res)=>{
    const quer = req.query.q;
  try {
    const results = await StudentProfile.find({ indexnumber:quer});
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

exports.takeattendance = async(req,res) => {
    const atId = req.params.id;
     createclass.findById(atId)
    .then(data => res.send(data))
}