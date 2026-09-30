const Student = require("../models/Student");
const Attendance = require("../models/Attendance");
const Assignment = require("../models/Assignment");
const Notice = require("../models/Notice");


const getAllStudents = async(req,res)=>{

    try{

        console.log("LOGGED USER:", req.user);


        const students = await Student.find()
        .select(
            "_id name rollNumber department year semester"
        );

        console.log("FACULTY STUDENTS API DATA:", students);

        res.status(200).json({
            students
        });


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// Faculty Dashboard Statistics

const getDashboardStats = async (req, res) => {

    try {

        const totalStudents = await Student.countDocuments();


        const assignments = await Assignment.countDocuments();


        const notices = await Notice.countDocuments();



        const attendanceData = await Attendance.find();


        let averageAttendance = 0;


        if(attendanceData.length > 0){


            const totalPercentage = attendanceData.reduce(
                (sum, item) => sum + item.percentage,
                0
            );


            averageAttendance = Number(
                (
                    totalPercentage / attendanceData.length
                ).toFixed(2)
            );

        }



        res.status(200).json({

            totalStudents,

            averageAttendance,

            activeAssignments: assignments,

            totalNotices: notices

        });



    } catch(error){


        console.log(
            "DASHBOARD STATS ERROR:",
            error
        );


        res.status(500).json({

            message:error.message

        });


    }

};


module.exports={
    getAllStudents,
    getDashboardStats
};