
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        
        userId: {

            type: String,

            required: true

        },


        rollNumber: {

            type: String,

            required: true,

            unique: true

        },


        registerNumber: {

            type: String,

            unique: true

        },


        name: {

            type: String

        },


        department: {

            type: String,

            required: true

        },


        degree: {

            type: String

        },


        section: {

            type: String

        },


        year: {

            type: String,

            required: true

        },


        semester: {

            type: Number

        },


        batch: {

            type: String

        },


        phone: {

            type: String

        },


        email: {

            type: String

        },


        dob: {

            type: String

        },


        bloodGroup: {

            type: String

        },


        address: {

            type: String

        },


        guardianName: {

            type: String

        },


        guardianPhone: {

            type: String

        },


        mentorName: {

            type: String

        },


        mentorContact: {

            type: String

        },


        hostelStatus: {

            type: String

        },


        transportBusNo: {

            type: String

        },


        cgpa: {

            type: Number

        },


        overallAttendance: {

            type: Number

        },


        verified: {

            type: Boolean,

            default: false

        },


        profileImage: {

            type: String,

            default: ""

        }

    },
    {
        timestamps: true
    });


const Student = mongoose.model(
    "Student",
    studentSchema,
    "students"
);

module.exports = Student;

