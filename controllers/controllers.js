const StudentSignup = require("../models/Students/studentSignup")
const StudentProfile =  require ("../models/Students/studentProfile")
const StudentAttendance = require ("../models/Students/studentAttendance")



exports.studentSignup = async (req,res) => {
    const { username, email, password } = req.body;

    try{
        await StudentSignup.insertMany({username, email, password})    
        res.send("Student Signup successful")
    }
    catch(err){
        res.send(err)
    }
}

exports.studentLogin = async (req,res) => {
    const {email, password} = req.body;
    try{
        const check = await StudentSignup.findOne({email:email,password:password})
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
exports.studentProfile = async (req,res) => {
    const {index_number, fullname, picture} = req.body;
    try{
        
        await StudentProfile.insertMany({index_number, fullname, picture})
        res.send("Profile updated")
    }
    catch (err){
        res.send(err)
    }
}
exports.studentattendance = async (req,res) => {
    const {index_number, unique_code,picture} = req.body;
    try{
        await StudentAttendance.insertMany({index_number,unique_code,picture})
    }catch(err){
        res.send(err)
    }
}