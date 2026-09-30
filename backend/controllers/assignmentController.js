const Assignment = require("../models/Assignment");




// Add Assignment

const addAssignment = async (req, res) => {


    try {


        const {

            title,
            description,
            subject,
            dueDate,
            department,
            year,
            fileUrl

        } = req.body;



        const assignment = await Assignment.create({

            title,

            description,

            subject,

            dueDate,

            department,

            year,

            fileUrl,

            createdBy: req.user ? req.user.id : null

        });



        res.status(201).json({

            message: "Assignment added successfully",

            assignment

        });



    } catch(error) {


        res.status(500).json({

            message: error.message

        });


    }


};





// Get Assignment

const getAssignment = async (req, res) => {


    try {


        const {

            department,

            year

        } = req.params;



        const assignments = await Assignment.find({

            department,

            year

        });



        if(assignments.length === 0){


            return res.status(404).json({

                message: "No assignment found"

            });


        }



        res.status(200).json({

            message: "Assignments fetched successfully",

            assignments

        });



    } catch(error) {


        res.status(500).json({

            message: error.message

        });


    }


};





module.exports = {

    addAssignment,

    getAssignment

};