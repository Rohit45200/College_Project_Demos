const mongoose = require("mongoose");


const attendanceSchema = new mongoose.Schema(
{

    studentId: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "Student",

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

        default: () => {
            return new Date().toISOString().split("T")[0];
        }

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

    },


    totalClasses: {

        type: Number,

        required: true

    },


    attendedClasses: {

        type: Number,

        required: true

    },


    percentage: {

        type: Number

    }


},
{
    timestamps:true
});



// Automatically calculate percentage

attendanceSchema.pre("save", function(){

    if(this.totalClasses > 0){

        this.percentage =
        Number(
            (
                (this.attendedClasses / this.totalClasses) * 100
            ).toFixed(2)
        );

    }

});



const Attendance = mongoose.model(
    "Attendance",
    attendanceSchema
);


module.exports = Attendance;