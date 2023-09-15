const Class = require("../models/Lecturers/createClass")
const LecturerSignup = require("../models/Lecturers/lecturersSignup")
const Attendance = require("../models/Lecturers/lecturerSetAttendance")
const PDF = require('../models/Students/studentAttendance')


exports.lecturerSignup = async (req,res) => {
    const { username, email, password } = req.body;

    try{
        await LecturerSignup.insertMany({username, email, password})    
        res.send("Student Signup successful")
    }
    catch(err){
        res.send(err)
    }
}

exports.lecturerLogin = async (req,res) => {
    const {email, password} = req.body;
    try{
        const check = await LecturerSignup.findOne({email:email,password:password})
        if(check.password === password){
            res.send('Login Successful')
        }
        else{
            res.send("wrong password")
        }
    }
    catch (err){
        res.send(err)
    }
}

exports.createclass = async (req,res) => {
    const {classname, coursename, level, lecturer_name, numberofstudents} = req.body;
    try{
        await Class.insertMany({classname, coursename, level, lecturer_name, numberofstudents})
        res.send("class created succedss")
    }
    catch (err){
        console.log(err)
    }
}
exports.getclass = async (req,res) => {
    Class.find()
    .then(data => res.send(data))
}

exports.setattendance = async (req,res) => {
    const {unique_code, time} =req.body;
    try{
        await Attendance.insertMany({unique_code,time})
        res.send("attendance set")
    }
    catch(err){
        console.log(err)
    }
}
exports.getpdf = async (req,res) => {
    const {unique_code} = req.body;
    PDF.find(unique_code)
    .then(data => res.send(data))
}