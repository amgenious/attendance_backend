const StudentSignup = require("../models/Students/studentSignup")
const StudentProfile =  require ("../models/Students/studentProfile")
const StudentAttendance = require ("../models/Students/studentAttendance")



exports.studentSignup = async (req,res) => {
    const { username, email, password } = req.body;

    try{
        await StudentSignup.insertMany({username, email, password})          
        res.json("created")
    }
    catch(err){
        res.send(err)
    }
}

exports.studentLogin = async (req,res) => {
    const {email, password} = req.body;
    try{
        const check = await StudentSignup.findOne({email:email,password:password})
        if(check){
            res.json('exist')
        }
        else{
            res.json('notexist')
        }
    }
    catch (err){
        res.send(err)
    }
}
exports.studentProfile = async (req,res) => {
    const {indexnumber, fullname, picture} = req.body;
    try{
        await StudentProfile.insertMany({indexnumber, fullname, picture})
        res.json('created')
    }
    catch (err){
        res.send(err)
    }
}
exports.studentattendance = async (req,res) => {
    const {indexnumber, uniquecode,} = req.body;
    try{
        await StudentAttendance.insertMany({indexnumber,uniquecode})
        res.json('created')
    }catch(err){
        res.send(err)
    }
}