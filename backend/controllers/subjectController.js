const Subject = require("../models/Subject");


// Get subjects by department and year

const getSubjects = async (req,res)=>{

    try{

        const {department, year} = req.query;


        const subjects = await Subject.find({
            department,
            year
        });


        res.status(200).json({
            subjects
        });


    }
    catch(error){

        console.log("SUBJECT ERROR:",error);

        res.status(500).json({
            message:error.message
        });

    }

};


const getDepartments = async(req,res)=>{

    try{

        const departments = await Subject.distinct("department");

        res.status(200).json({
            departments
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};


const getYears = async(req,res)=>{

    try{

        const { department } = req.query;


        const years = await Subject.distinct("year", {
            department
        });


        res.status(200).json({
            years
        });


    }
    catch(error){

        console.log("YEAR ERROR:",error);

        res.status(500).json({
            message:error.message
        });

    }

};



module.exports = {
    getSubjects,
    getDepartments,
    getYears
};