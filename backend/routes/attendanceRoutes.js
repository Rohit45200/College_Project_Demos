// now
// ------------
const authMiddleware = require("../middleware/authMiddleware");
// --------

const express = require("express");

const router = express.Router();

const {
    addAttendance,
    getStudentAttendance,
} = require("../controllers/attendanceController");


// Add Attendance
router.post(
    "/",
    addAttendance
);

// Get student overall attendance
router.get(
    "/",
    authMiddleware,
    getStudentAttendance
);
// ------------

module.exports = router;