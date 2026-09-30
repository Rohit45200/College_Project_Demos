const express = require("express");

const router = express.Router();


const authMiddleware = require("../middleware/authMiddleware");


const {

    createSchedule,

    getAllSchedules,

    getTodaySchedule,

    getScheduleById,

    updateSchedule,

    deleteSchedule

} = require("../controllers/scheduleController");




// Create Schedule

router.post(

    "/create",

    authMiddleware,

    createSchedule

);




// Get All Schedule

router.get(

    "/all",

    authMiddleware,

    getAllSchedules

);




// Get Today's Schedule

router.get(

    "/today",

    authMiddleware,

    getTodaySchedule

);



// Get Schedule By Id

router.get(

    "/:id",

    authMiddleware,

    getScheduleById

);


// Update Schedule

router.put(

    "/:id",

    authMiddleware,

    updateSchedule

);



// Delete Schedule

router.delete(

    "/:id",

    authMiddleware,

    deleteSchedule

);



module.exports = router;