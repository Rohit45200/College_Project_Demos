const express = require("express");

const router = express.Router();


const authMiddleware = require("../middleware/authMiddleware");


const {
    addAttendanceLog,
    getAttendanceLogs
} = require("../controllers/attendanceLogController");



// Add Daily Attendance Log
router.post(
    "/",
    addAttendanceLog
);



// Get Student Daily Logs
router.get(
    "/",
    authMiddleware,
    getAttendanceLogs
);



module.exports = router;