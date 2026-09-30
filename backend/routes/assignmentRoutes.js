const express = require("express");

const router = express.Router();



const {
    addAssignment,
    getAssignment
} = require("../controllers/assignmentController");



const authMiddleware = require("../middleware/authMiddleware");




// Add Assignment Route

router.post(

    "/add",

    authMiddleware,

    addAssignment

);




// Get Assignment Route

router.get(

    "/:department/:year",

    authMiddleware,

    getAssignment

);



module.exports = router;