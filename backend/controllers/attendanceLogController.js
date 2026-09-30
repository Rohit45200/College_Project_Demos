const AttendanceLog = require("../models/AttendanceLog");
const Student = require("../models/Student");
const Attendance = require("../models/Attendance");
const Subject = require("../models/Subject");



// ------------------------------------------
const addAttendanceLog = async (req, res) => {

    try {

        const {
            facultyId,
            department,
            year,
            subject,
            subjectCode,
            date,
            timeSlot,
            students
        } = req.body;
        console.log("SUBJECT:", subject);
        console.log("SUBJECT CODE:", subjectCode);
        console.log("TIME SLOT:", timeSlot);



        console.log("RECEIVED SUBJECT FROM FRONTEND:", subject);


        const subjectData = await Subject.findOne({
            subjectName: subject
        });




        let finalSubject = subject;


        if (subjectData) {
            finalSubject = subjectData.subjectName;
        }


        const attendanceLogs = students.map((student) => ({

            studentId: student.studentId,

            facultyId,

            department,

            year,

            subject: finalSubject,

            subjectCode,

            date,

            timeSlot,

            status: student.status

        }));


        const logs = await AttendanceLog.insertMany(
            attendanceLogs
        );


        // Update Subject Wise Attendance

        for (const student of students) {

            const existingAttendance = await Attendance.findOne({
                studentId: student.studentId,
                subject: finalSubject
            });

            if (existingAttendance) {
                const newTotalClasses =
                    (existingAttendance.totalClasses || 0) + 1;

                const newAttendedClasses =
                    (existingAttendance.attendedClasses || 0) +
                    (student.status === "Present" ? 1 : 0);

                const newPercentage = Number(
                    (
                        (newAttendedClasses / newTotalClasses) * 100
                    ).toFixed(2)
                );

                await Attendance.updateOne(
                    { _id: existingAttendance._id },
                    {
                        $set: {
                            subjectCode: subjectCode,
                            timeSlot: timeSlot,
                            date: date,
                            status: student.status,
                            percentage: newPercentage
                        },
                        $inc: {
                            totalClasses: 1,
                            attendedClasses:
                                student.status === "Present" ? 1 : 0
                        }
                    }
                );
            }

            else {

                console.log("ATTENDANCE CREATE SUBJECT CODE:", subjectCode);
                console.log("ATTENDANCE CREATE TIME SLOT:", timeSlot);

                await Attendance.create({

                    studentId: student.studentId,

                    subject: finalSubject,

                    subjectCode: subjectCode,

                    date: date,

                    timeSlot: timeSlot,

                    status: student.status,

                    totalClasses: 1,

                    attendedClasses:
                        student.status === "Present" ? 1 : 0,

                    percentage:
                        student.status === "Present" ? 100 : 0

                });

            }

        }


        res.status(201).json({

            message: "Attendance saved successfully",

            logs

        });


    }
    catch (error) {

        console.log(
            "ADD ATTENDANCE ERROR:",
            error
        );


        res.status(500).json({

            message: error.message

        });

    }

};


const getAttendanceLogs = async (req, res) => {


    try {


        console.log("LOGIN USER:", req.user);



        const student = await Student.findOne({

            userId: req.user.id

        });



        console.log("FOUND STUDENT:", student);



        const logs = await AttendanceLog.find({

            studentId: student._id

        });



        console.log("ATTENDANCE LOGS:", logs);



        res.status(200).json({

            message: "Attendance logs fetched successfully",

            logs

        });


    }
    catch (error) {

        console.log(error);

        res.status(500).json({

            message: error.message

        });

    }


};
// --------------------------



module.exports = {

    addAttendanceLog,

    getAttendanceLogs

};