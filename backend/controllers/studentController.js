const Student = require("../models/Student");

console.log("studentController loaded");


const mongoose = require("mongoose");



// Create Student Profile

const createStudentProfile = async (req, res) => {

    try {


        


        const {

            name,
            rollNumber,
            registerNumber,

            department,
            degree,
            section,

            year,
            semester,
            batch,

            phone,
            email,

            dob,
            bloodGroup,

            address,

            guardianName,
            guardianPhone,

            mentorName,
            mentorContact,

            hostelStatus,
            transportBusNo,

            cgpa,
            overallAttendance,

            verified,

            profileImage

        } = req.body;



        const student = await Student.create({

            userId: req.user.id,

            name,

            rollNumber,
            registerNumber,

            department,
            degree,
            section,

            year,
            semester,
            batch,

            phone,
            email,

            dob,
            bloodGroup,

            address,

            guardianName,
            guardianPhone,

            mentorName,
            mentorContact,

            hostelStatus,
            transportBusNo,

            cgpa,
            overallAttendance,

            verified,

            profileImage

        });



        res.status(201).json({

            message: "Student profile created successfully",

            student

        });



    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};




// Get Student Profile

const getStudentProfile = async (req, res) => {

    try {


        console.log("TOKEN USER ID:", req.user.id);



        const student = await Student.findOne({

            userId: req.user.id

        });



        console.log("FOUND STUDENT:", student);



        if (!student) {

            return res.status(404).json({

                message: "Student profile not found"

            });

        }



        res.status(200).json({


            id: student._id,

            userId: student.userId,


            name: student.name,

            email: student.email,


            role: "student",


            rollNumber: student.rollNumber,

            registerNumber: student.registerNumber,


            department: student.department,

            degree: student.degree,

            section: student.section,


            year: student.year,

            semester: student.semester,

            batch: student.batch,


            phone: student.phone,

            dob: student.dob,

            bloodGroup: student.bloodGroup,


            address: student.address,


            guardianName: student.guardianName,

            guardianPhone: student.guardianPhone,


            mentorName: student.mentorName,

            mentorContact: student.mentorContact,


            hostelStatus: student.hostelStatus,

            transportBusNo: student.transportBusNo,


            cgpa: student.cgpa,

            overallAttendance: student.overallAttendance,


            verified: student.verified,

            profileImage: student.profileImage


        });



    } catch (error) {


        console.log("PROFILE ERROR:", error);


        res.status(500).json({

            message: error.message

        });


    }

};


// ------------------------------
// Get All Students (Faculty)

const getAllStudents = async (req, res) => {

    try {

        const students = await Student.find()
            .select(
                "name rollNumber department year semester section"
            );


        res.status(200).json({

            students

        });


    }
    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
// ---------------------------------

// Delete Student (Admin)

const deleteStudent = async (req, res) => {

    try {


        const student = await Student.findByIdAndDelete(
            req.params.id
        );


        if (!student) {

            return res.status(404).json({

                message: "Student not found"

            });

        }



        res.status(200).json({

            message: "Student deleted successfully"

        });



    } catch (error) {


        console.log(
            "DELETE STUDENT ERROR:",
            error
        );


        res.status(500).json({

            message: error.message

        });


    }

};



// Update Student (Admin)

const updateStudent = async (req, res) => {


    try {


        const student = await Student.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );



        if (!student) {


            return res.status(404).json({

                message: "Student not found"

            });

        }



        res.status(200).json({

            message: "Student updated successfully",

            student

        });



    }
    catch (error) {


        console.log(
            "UPDATE STUDENT ERROR:",
            error
        );


        res.status(500).json({

            message: error.message

        });


    }


};

// Get Single Student By ID (Admin)
// const getStudentById = async (req, res) => {

//     try {

//         console.log(
//             "SEARCH ID:",
//             req.params.id
//         );


//         const student = await Student.collection.findOne({

//             _id: req.params.id

//         });


//         console.log(
//             "DIRECT COLLECTION RESULT:",
//             student
//         );



//         // -------------------------
       
//         console.log(
//             "REQUEST ID TYPE:",
//             typeof req.params.id
//         );


//         console.log(
//             "FOUND STUDENT:",
//             student
//         );


//         // ---------------------------


//         if (!student) {

//             return res.status(404).json({

//                 message: "Student not found"

//             });

//         }


//         res.status(200).json({

//             student

//         });


//     }
//     catch (error) {

//         console.log(error);

//         res.status(500).json({

//             message: error.message

//         });

//     }

// };

const getStudentById = async (req,res)=>{

    try{

        console.log("REQUEST ID:", req.params.id);


        const allStudents = await Student.find();


        const student = allStudents.find(
            (item)=> item._id.toString() === req.params.id
        );


        console.log(
            "FOUND STUDENT MANUALLY:",
            student
        );


        if(!student){

            return res.status(404).json({
                message:"Student not found"
            });

        }


        res.status(200).json({
            student
        });


    }
    catch(error){

        console.log(
            "GET STUDENT ERROR:",
            error
        );


        res.status(500).json({
            message:error.message
        });

    }

};

module.exports = {

    createStudentProfile,

    getStudentProfile,

    getAllStudents,

    deleteStudent,

    updateStudent,

    getStudentById

};