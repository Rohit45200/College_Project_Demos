const express = require("express");

const router = express.Router();


const {
    createNotice,
    getAllNotices,
     deleteNotice
} = require("../controllers/noticeController");


const authMiddleware = require("../middleware/authMiddleware");



// Create Notice Route
// Admin/Faculty ke liye login required

router.post(
    "/create",
    authMiddleware,
    createNotice
);



// Get All Notices Route
// Student ko notice dekhne ke liye abhi authentication nahi chahiye

router.get(
    "/all",
    getAllNotices
);


// Delete Notice

router.delete(

    "/:id",

    authMiddleware,

    deleteNotice

);



module.exports = router;