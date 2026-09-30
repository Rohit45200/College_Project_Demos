const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");


const {

    getAllFaculty,

    createFaculty,

    deleteFaculty,

    getDashboardStats

} = require("../controllers/adminController");




// Get Faculty

router.get(

    "/faculty",

    authMiddleware,

    getAllFaculty

);



// Add Faculty

router.post(

    "/faculty/create",

    authMiddleware,

    createFaculty

);



// Delete Faculty

router.delete(

    "/faculty/:id",

    authMiddleware,

    deleteFaculty

);


// Admin Dashboard Stats

router.get(

    "/dashboard-stats",

    authMiddleware,

    getDashboardStats

);



module.exports = router;