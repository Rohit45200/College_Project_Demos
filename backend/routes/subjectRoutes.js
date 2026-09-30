const express = require("express");

const router = express.Router();


const {
    getSubjects,
    getDepartments,
    getYears
} = require("../controllers/subjectController");



router.get("/", getSubjects);


router.get("/departments", getDepartments);

router.get("/years", getYears);



module.exports = router;