const Timetable = require("../models/Timetable");




// Add Timetable

const addTimetable = async (req, res) => {


    try {


        const {

            department,
            year,
            day,
            subject,
            time,
            room

        } = req.body;



        const timetable = await Timetable.create({

            department,

            year,

            day,

            subject,

            time,

            room,

            createdBy: req.user ? req.user.id : null

        });



        res.status(201).json({

            message: "Timetable added successfully",

            timetable

        });



    } catch(error) {


        res.status(500).json({

            message: error.message

        });


    }


};





// Get Timetable

const getTimetable = async (req, res) => {


    try {


        const {

            department,

            year

        } = req.params;



        const timetable = await Timetable.find({

            department,

            year

        });



        if(timetable.length === 0){


            return res.status(404).json({

                message: "No timetable found"

            });


        }



        res.status(200).json({

            message: "Timetable fetched successfully",

            timetable

        });



    } catch(error) {


        res.status(500).json({

            message: error.message

        });


    }


};





module.exports = {

    addTimetable,

    getTimetable

};