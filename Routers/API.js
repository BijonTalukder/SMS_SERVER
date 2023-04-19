const express = require('express');
const router = express.Router();
const UsersController = require('./../Controller/Users/UsersController')
const AttendanceController = require('./../Controller/Attendance/AttendanceController')

router.post("/create-user",UsersController.CreateUsers);
router.get("/get-user",UsersController.GetUser);
router.post("/update-user/:id",UsersController.UpdateUser);
router.get("/get-single-user/:email",UsersController.GetSingleUser)
router.get("/get-user-by-group/:group",UsersController.GetUserByGroup)
router.get("/get-user-by-type/:type",UsersController.GetUserByType)



router.post("/create-attendance",AttendanceController.CreateAttendance)
router.get("/get-attendance",AttendanceController.GetAttendance)
router.post("/update-attendance/:id",AttendanceController.UpdateAttendance)

module.exports = router;