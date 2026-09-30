const Schedule = require("../models/Schedule");



// Create Schedule

const createSchedule = async (req, res) => {

    try {


        const {

            subject,
            facultyName,
            department,
            year,
            section,
            day,
            startTime,
            endTime,
            roomNo

        } = req.body;



        const schedule = await Schedule.create({

            subject,

            facultyName,

            department,

            year,

            section,

            day,

            startTime,

            endTime,

            roomNo,

            createdBy: req.user ? req.user.id : null

        });



        res.status(201).json({

            message: "Schedule created successfully",

            schedule

        });



    } catch (error) {


        console.log(
            "CREATE SCHEDULE ERROR:",
            error
        );


        res.status(500).json({

            message: error.message

        });


    }

};






// Get All Schedule

const getAllSchedules = async (req, res) => {


    try {


        const schedules = await Schedule.find()
            .sort({
                createdAt: -1
            });



        res.status(200).json({

            schedules

        });



    } catch (error) {


        console.log(
            "GET SCHEDULE ERROR:",
            error
        );


        res.status(500).json({

            message: error.message

        });


    }


};






// Get Today's Schedule

const getTodaySchedule = async (req, res) => {


    try {


        const today = new Date().toLocaleString(
            "en-US",
            {
                weekday: "long"
            }
        );



        const schedules = await Schedule.find({

            day: today

        });



        res.status(200).json({

            schedules

        });



    } catch (error) {


        console.log(
            "TODAY SCHEDULE ERROR:",
            error
        );


        res.status(500).json({

            message: error.message

        });


    }


};



// Get Schedule By Id

const getScheduleById = async(req,res)=>{


    try{


        const schedule = await Schedule.findById(
            req.params.id
        );


        if(!schedule){

            return res.status(404).json({

                message:"Schedule not found"

            });

        }



        res.status(200).json({

            schedule

        });



    }
    catch(error){


        console.log(
            "GET SCHEDULE BY ID ERROR:",
            error
        );


        res.status(500).json({

            message:error.message

        });


    }


};


// Update Schedule

const updateSchedule = async (req, res) => {

    try {


        const schedule = await Schedule.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );


        if (!schedule) {

            return res.status(404).json({

                message: "Schedule not found"

            });

        }



        res.status(200).json({

            message: "Schedule updated successfully",

            schedule

        });



    }
    catch (error) {


        console.log(
            "UPDATE SCHEDULE ERROR:",
            error
        );


        res.status(500).json({

            message: error.message

        });


    }

};






// Delete Schedule

const deleteSchedule = async (req, res) => {


    try {


        const schedule = await Schedule.findByIdAndDelete(

            req.params.id

        );



        if (!schedule) {


            return res.status(404).json({

                message: "Schedule not found"

            });


        }



        res.status(200).json({

            message: "Schedule deleted successfully"

        });



    }
    catch (error) {


        console.log(
            "DELETE SCHEDULE ERROR:",
            error
        );


        res.status(500).json({

            message: error.message

        });


    }


};




module.exports = {

    createSchedule,

    getAllSchedules,

    getTodaySchedule,

     getScheduleById,

    updateSchedule,

    deleteSchedule

};