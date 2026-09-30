const mongoose = require("mongoose");


const resultSchema = new mongoose.Schema(
    {

        studentId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Student",

            required: true

        },


        semester: {
            type: Number,
            required: true
        },


        subject: {

            type: String,

            required: true

        },


        code: {

            type: String,

            required: true

        },


        credits: {

            type: Number,

            required: true

        },


        internalMarks: {

            type: Number,

            required: true

        },


        externalMarks: {

            type: Number,

            required: true

        },


        totalMarks: {

            type: Number,

            required: true

        },


        grade: {

            type: String,

            required: true

        },

        sgpa: {
            type: Number,
            required: true
        }


    },
    {
        timestamps: true
    });


const Result = mongoose.model(
    "Result",
    resultSchema,
     "results"
);


module.exports = Result;