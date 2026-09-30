import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import adminService from "../../services/adminService";


const EditSchedule = () => {


    const { id } = useParams();

    const navigate = useNavigate();


    const [formData, setFormData] = useState({

        subject:"",
        facultyName:"",
        department:"",
        year:"",
        section:"",
        day:"",
        startTime:"",
        endTime:"",
        roomNo:""

    });



    useEffect(()=>{


        fetchSchedule();


    },[]);



    const fetchSchedule = async()=>{


        try{


            const data = await adminService.getScheduleById(
                id as string
            );


            setFormData({

                subject:data.subject,

                facultyName:data.facultyName,

                department:data.department,

                year:data.year,

                section:data.section,

                day:data.day,

                startTime:data.startTime,

                endTime:data.endTime,

                roomNo:data.roomNo

            });



        }
        catch(error){


            console.log(
                "FETCH SCHEDULE ERROR:",
                error
            );


        }


    };





    const handleUpdate = async()=>{


        try{


            await adminService.updateSchedule(

                id as string,

                formData

            );


            navigate("/admin/schedule");


        }
        catch(error){


            console.log(
                "UPDATE ERROR:",
                error
            );


        }


    };





    return (


        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow">


                <h1 className="text-3xl font-bold mb-6">

                    Edit Schedule

                </h1>



                <div className="grid md:grid-cols-2 gap-4">


                {
                    Object.keys(formData).map((field)=>(
                        

                        <input

                            key={field}

                            className="border p-3 rounded-lg"

                            placeholder={field}

                            value={(formData as any)[field]}

                            onChange={(e)=>

                                setFormData({

                                    ...formData,

                                    [field]:e.target.value

                                })

                            }

                        />


                    ))
                }


                </div>



                <button

                    onClick={handleUpdate}

                    className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl"

                >

                    Update Schedule

                </button>



            </div>


        </div>


    );


};


export default EditSchedule;