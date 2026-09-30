const Attendance = require("../models/Attendance");
const Student = require("../models/Student");


// Add Attendance
const addAttendance = async (req, res) => {

    try {

        const {
            studentId,
            subject,
            subjectCode,
            date,
            timeSlot,
            status,
            totalClasses,
            attendedClasses
        } = req.body;


        const percentage =
            (attendedClasses / totalClasses) * 100;


        const attendance = await Attendance.create({

            studentId,
            subject,
            subjectCode,
            date,
            timeSlot,
            status,
            totalClasses,
            attendedClasses,
            percentage

        });


        res.status(201).json({

            message: "Attendance added successfully",

            attendance

        });


    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};



// Get Student Overall Attendance
const getStudentAttendance = async (req, res) => {

    try {


        const student = await Student.findOne({

            userId: req.user.id

        });


        if (!student) {

            return res.status(404).json({

                message: "Student not found"

            });

        }



        const attendance = await Attendance.find({

            studentId: student._id

        }).lean();



        console.log(
            "OVERALL ATTENDANCE:",
            attendance
        );



        res.status(200).json({

            message: "Attendance fetched successfully",

            attendance

        });



    } catch (error) {


        console.log(
            "ATTENDANCE ERROR:",
            error
        );


        res.status(500).json({

            message: error.message

        });

    }

};


module.exports = {

    addAttendance,

    getStudentAttendance,

};