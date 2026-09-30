const mongoose = require("mongoose");


const attendanceLogSchema = new mongoose.Schema({

    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },

    facultyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },


    department: {
        type: String,
        required: true
    },


    year: {
        type: String,
        required: true
    },



    subject: {
        type: String,
        required: true
    },


    subjectCode: {
        type: String,
        required: true
    },


    date: {
        type: String,
        required: true
    },


    timeSlot: {
        type: String,
        required: true
    },


    status: {
        type: String,
        enum: [
            "Present",
            "Absent",
            "On-Duty",
            "Leave"
        ],
        default: "Present"
    }


},
    {
        timestamps: true
    });


module.exports = mongoose.model(
    "AttendanceLog",
    attendanceLogSchema
);