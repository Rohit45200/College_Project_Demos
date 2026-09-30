const express = require("express");

const router = express.Router();



const {
    addTimetable,
    getTimetable
} = require("../controllers/timetableController");



const authMiddleware = require("../middleware/authMiddleware");




// Add Timetable Route

router.post(

    "/add",

    authMiddleware,

    addTimetable

);




// Get Timetable Route

router.get(

    "/:department/:year",

    authMiddleware,

    getTimetable

);



module.exports = router;