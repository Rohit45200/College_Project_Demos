const express = require("express");

const router = express.Router();

const {
    createStudentProfile,
    getStudentProfile,
    getAllStudents,
    deleteStudent,
    updateStudent,
     getStudentById
} = require("../controllers/studentController");

const authMiddleware = require("../middleware/authMiddleware");


// Test route
router.get("/", (req, res) => {
    res.json({
        message: "Student route working"
    });
});


// Create Student Profile
router.post(
    "/create",
    authMiddleware,
    createStudentProfile
);


// Get Student Profile
router.get(
    "/profile",
    authMiddleware,
    getStudentProfile
);

// ----------------------
// Get All Students For Faculty
router.get(
    "/all",
    authMiddleware,
    getAllStudents
);
// -----------------------


// Delete Student (Admin)

router.delete(

    "/:id",

    authMiddleware,

    deleteStudent

);


// Update Student (Admin)

router.put(

    "/:id",

    authMiddleware,

    updateStudent

);


// Get Single Student By ID (Admin)

router.get(

    "/:id",

    authMiddleware,

    getStudentById

);


module.exports = router;