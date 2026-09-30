import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import adminService from "../../services/adminService";


const StudentDetails = () => {


    const { id } = useParams();


    const [student,setStudent] = useState<any>(null);



    useEffect(()=>{


        const fetchStudent = async()=>{


            try{


                const data = await adminService.getStudentById(
                    id as string
                );


                console.log(
                    "STUDENT DETAILS:",
                    data
                );


                setStudent(data);



            }
            catch(error){


                console.log(
                    "STUDENT DETAILS ERROR:",
                    error
                );


            }


        };


        fetchStudent();


    },[id]);





    if(!student){


        return (

            <div className="p-8">

                Loading student details...

            </div>

        );

    }





    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">


                <h1 className="text-3xl font-bold mb-6">

                    Student Details

                </h1>



                <div className="space-y-3">


                    <p>
                        <b>Name:</b> {student.name}
                    </p>


                    <p>
                        <b>Roll Number:</b> {student.rollNumber}
                    </p>


                    <p>
                        <b>Register Number:</b> {student.registerNumber}
                    </p>


                    <p>
                        <b>Department:</b> {student.department}
                    </p>


                    <p>
                        <b>Degree:</b> {student.degree}
                    </p>


                    <p>
                        <b>Year:</b> {student.year}
                    </p>


                    <p>
                        <b>Semester:</b> {student.semester}
                    </p>


                    <p>
                        <b>Batch:</b> {student.batch}
                    </p>


                    <p>
                        <b>CGPA:</b> {student.cgpa}
                    </p>


                    <p>
                        <b>Attendance:</b> {student.overallAttendance}
                    </p>


                    <p>
                        <b>Email:</b> {student.email}
                    </p>


                    <p>
                        <b>Phone:</b> {student.phone}
                    </p>



                </div>


            </div>


        </div>

    );


};


export default StudentDetails;