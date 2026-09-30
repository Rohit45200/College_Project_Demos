const mongoose = require("mongoose");


const assignmentSchema = new mongoose.Schema(
{

    title: {

        type: String,

        required: true

    },


    description: {

        type: String,

        required: true

    },


    subject: {

        type: String,

        required: true

    },


    dueDate: {

        type: Date,

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


    fileUrl: {

        type: String,

        default: ""

    },


    createdBy: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User"

    }


},
{
    timestamps: true
});


const Assignment = mongoose.model(
    "Assignment",
    assignmentSchema
);


module.exports = Assignment;