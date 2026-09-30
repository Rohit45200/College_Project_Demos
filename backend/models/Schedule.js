const mongoose = require("mongoose");


const scheduleSchema = new mongoose.Schema(
{

    subject: {

        type: String,

        required: true

    },


    facultyName: {

        type: String,

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


    section: {

        type: String,

        required: true

    },


    day: {

        type: String,

        required: true

    },


    startTime: {

        type: String,

        required: true

    },


    endTime: {

        type: String,

        required: true

    },


    roomNo: {

        type: String,

        default: ""

    },


    createdBy: {

        type: mongoose.Schema.Types.ObjectId,

        ref:"User"

    }


},
{
    timestamps:true
});


const Schedule = mongoose.model(
    "Schedule",
    scheduleSchema
);


module.exports = Schedule;