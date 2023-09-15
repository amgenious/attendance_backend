const { Router } = require('express');
const controller = require('../controllers/controllers')
const control = require('../controllers/lecturercontrollers')

const router = Router();
// students apis
router.post('/studentsignup', controller.studentSignup)
router.post('/studentlogin', controller.studentLogin)
router.post('/profile', controller.studentProfile)
router.post('/studentattendance', controller.studentattendance)

// common api
router.get("/classes", control.getclass)

// lecturer apis
router.post('/lecturersignup', control.lecturerSignup)
router.post('/lecturerlogin', control.lecturerLogin)
router.post("/createclass", control.createclass)
router.post("/setattendance", control.setattendance)
router.post("/getpdf",control.getpdf)


module.exports = router;
