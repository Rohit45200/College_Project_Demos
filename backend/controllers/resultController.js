const Result = require("../models/Result");
const Student = require("../models/Student");



// Add Result

const addResult = async (req, res) => {

    console.log("ADD RESULT API HIT");
    try {


        const {

            studentId,
            semester,
            subject,
            code,
            credits,
            internalMarks,
            externalMarks,
            totalMarks,
            grade,
            sgpa

        } = req.body;

        // Required fields validation

        if (
            !studentId ||
            !semester ||
            !subject ||
            !code ||
            !credits ||
            internalMarks === undefined ||
            externalMarks === undefined ||
            !grade
        ) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }


        // Marks validation

        if (internalMarks > 40) {

            return res.status(400).json({
                message: "Internal marks cannot be greater than 40"
            });

        }


        if (externalMarks > 60) {

            return res.status(400).json({
                message: "External marks cannot be greater than 60"
            });

        }


        const getGradePoint = (grade) => {

            if (grade === "O") return 10;
            if (grade === "A+") return 9;
            if (grade === "A") return 8;
            if (grade === "B+") return 7;
            if (grade === "B") return 6;

            return 0;
        };



        const existingResults = await Result.find({
            studentId,
            semester
        });


        // Duplicate subject check

        const existingSubject = await Result.findOne({
            studentId,
            semester,
            code
        });


        if (existingSubject) {

            return res.status(400).json({
                message: "This subject result already uploaded"
            });

        }

        const result = await Result.create({

            studentId,

            semester,

            subject,
            code,
            credits,

            internalMarks,

            externalMarks,

            totalMarks,

            grade,
            sgpa: 0

        });

        const allResults = await Result.find({
            studentId,
            semester
        });


        let totalCredits = 0;
        let totalGradePoints = 0;


        allResults.forEach((item) => {

            const point = getGradePoint(item.grade);

            totalCredits += item.credits;

            totalGradePoints += point * item.credits;

        });


        const calculatedSGPA = Number(
            (totalGradePoints / totalCredits).toFixed(2)
        );


        await Result.updateMany(
            {
                studentId,
                semester
            },
            {
                $set: {
                    sgpa: calculatedSGPA
                }
            }
        );



        res.status(201).json({

            message: "Result added successfully",

            result

        });



    } catch (error) {

        console.log("ADD RESULT ERROR:", error);

        res.status(500).json({

            message: error.message

        });

    }


};





// Get Student Result
const getStudentResult = async (req, res) => {

    try {

        const { studentId } = req.params;


        const student = await Student.findOne({
            userId: studentId
        });


        console.log("FOUND STUDENT ID:", student._id);


        const results = await Result.find({
            studentId: student._id
        }).sort({
            semester: -1
        });


        console.log("RESULT DATA:", results);


        if (results.length === 0) {

            return res.status(404).json({
                message: "No result found"
            });

        }


        res.status(200).json({

            message: "Result fetched successfully",

            results

        });


    } catch (error) {

        console.log("RESULT ERROR:", error);


        res.status(500).json({

            message: error.message

        });

    }

};



// Get All Results (Faculty)

const getAllResults = async (req, res) => {

    try {

        const results = await Result.find()
            .populate({
                path: "studentId",
                select: "name rollNumber department"
            })
            .sort({
                semester: -1
            });


        console.log(
            "POPULATED RESULTS:",
            JSON.stringify(results[0], null, 2)
        );


        res.status(200).json({

            message: "All results fetched successfully",

            results

        });


    } catch (error) {


        console.log(
            "GET ALL RESULTS ERROR:",
            error
        );


        res.status(500).json({

            message: error.message

        });

    }

};





module.exports = {

    addResult,

    getStudentResult,

    getAllResults

};