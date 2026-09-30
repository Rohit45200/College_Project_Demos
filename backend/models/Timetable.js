const mongoose = require("mongoose");


const timetableSchema = new mongoose.Schema(
{

    department: {

        type: String,

        required: true

    },


    year: {

        type: String,

        required: true

    },


    day: {

        type: String,

        required: true

    },


    subject: {

        type: String,

        required: true

    },


    time: {

        type: String,

        required: true

    },


    room: {

        type: String

    },


    createdBy: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User"

    }


},
{
    timestamps: true
});


const Timetable = mongoose.model(
    "Timetable",
    timetableSchema
);


module.exports = Timetable;