const express = require("express");

const router = express.Router();



const {
    addResult,
    getStudentResult,
    getAllResults
} = require("../controllers/resultController");



const authMiddleware = require("../middleware/authMiddleware");




// Add Result Route

router.post(

    "/add",

    authMiddleware,

    addResult

);




// Get Student Result Route

router.get(

    "/student/:studentId",

    authMiddleware,

    getStudentResult

);

// Get all marks for view
router.get(
    "/all",
    getAllResults
);



module.exports = router;