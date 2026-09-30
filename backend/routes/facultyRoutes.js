const express = require("express");

console.log("Faculty routes loaded");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getAllStudents,
    getDashboardStats
} = require("../controllers/facultyController");


router.get("/test", (req, res) => {

    res.json({
        message: "Faculty route working"
    });

});


router.get(
    "/students",
    authMiddleware,
    getAllStudents
);

router.get(
    "/dashboard-stats",
    authMiddleware,
    getDashboardStats
);


module.exports = router;