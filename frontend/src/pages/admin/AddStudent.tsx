import React, { useState } from "react";
import adminService from "../../services/adminService";


const AddStudent = () => {


    const [formData, setFormData] = useState({

        name: "",
        rollNumber: "",
        registerNumber: "",
        department: "",
        degree: "",
        section: "",
        year: "",
        semester: "",
        batch: "",
        phone: "",
        email: ""

    });



    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {


        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });


    };





    const handleSubmit = async(
        e: React.FormEvent
    )=>{


        e.preventDefault();


        try{


            const response =
            await adminService.createStudent(formData);



            console.log(
                "STUDENT CREATED:",
                response
            );


            alert(
                "Student Added Successfully"
            );


        }
        catch(error){


            console.log(
                "CREATE STUDENT ERROR:",
                error
            );


        }


    };




    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow">


                <h1 className="text-3xl font-bold mb-6">
                    Add New Student
                </h1>



                <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-4"
                >


                {
                    Object.keys(formData).map((field)=>(


                        <input

                        key={field}

                        name={field}

                        value={
                            formData[
                                field as keyof typeof formData
                            ]
                        }

                        onChange={handleChange}

                        placeholder={
                            field
                        }

                        className="border p-3 rounded-lg"

                        />


                    ))
                }



                <button

                type="submit"

                className="md:col-span-2 bg-indigo-600 text-white p-3 rounded-xl font-semibold"

                >

                    Add Student

                </button>


                </form>


            </div>


        </div>

    );


};


export default AddStudent;