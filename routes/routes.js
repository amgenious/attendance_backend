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
router.get('/classes', control.getclass)
router.get('/searchpdf', control.searchpdf)
router.get('/searchstudent', control.searchstudent)

// lecturer apis
router.get('/takeattendance/:id',control.takeattendance)

router.post('/lecturersignup', control.lecturerSignup)
router.post('/lecturerlogin', control.lecturerLogin)
router.post('/createclass', control.createclass)
router.post('/setattendance', control.setattendance)



module.exports = router;
