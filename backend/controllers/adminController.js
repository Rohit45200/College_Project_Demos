const User = require("../models/User");
const bcrypt = require("bcrypt");

const Student = require("../models/Student");
const Notice = require("../models/Notice");

// Get All Faculty

const getAllFaculty = async (req, res) => {

    try {

        const faculty = await User.find({
            role: "faculty"
        })
        .select(
            "name email role"
        );


        res.status(200).json({

            faculty

        });


    } catch(error){


        console.log(
            "GET FACULTY ERROR:",
            error
        );


        res.status(500).json({

            message:error.message

        });


    }

};



// Create Faculty

const createFaculty = async(req,res)=>{


    try{


        const {
            name,
            email,
            password
        } = req.body;



        const existingUser = await User.findOne({

            email

        });



        if(existingUser){

            return res.status(400).json({

                message:"User already exists"

            });

        }



        const hashedPassword = await bcrypt.hash(

            password,

            10

        );



        const faculty = await User.create({

            name,

            email,

            password:hashedPassword,

            role:"faculty"

        });



        res.status(201).json({

            message:"Faculty created successfully",

            faculty:{
                id:faculty._id,
                name:faculty.name,
                email:faculty.email
            }

        });



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};




// Delete Faculty

const deleteFaculty = async(req,res)=>{


    try{


        const faculty = await User.findOneAndDelete({

            _id:req.params.id,

            role:"faculty"

        });



        if(!faculty){


            return res.status(404).json({

                message:"Faculty not found"

            });


        }



        res.status(200).json({

            message:"Faculty deleted successfully"

        });



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};


// Admin Dashboard Stats

const getDashboardStats = async (req, res) => {

    try {


        const totalStudents = await Student.countDocuments();


        const totalFaculty = await User.countDocuments({
            role: "faculty"
        });


        const totalNotices = await Notice.countDocuments();



        const departmentsData = await Student.distinct(
            "department"
        );


        const departments = departmentsData.length;



        res.status(200).json({

            totalStudents,

            totalFaculty,

            totalNotices,

            departments

        });



    }
    catch(error){


        console.log(
            "ADMIN DASHBOARD STATS ERROR:",
            error
        );


        res.status(500).json({

            message:error.message

        });


    }

};



module.exports = {

    getAllFaculty,

    createFaculty,

    deleteFaculty,

    getDashboardStats

};