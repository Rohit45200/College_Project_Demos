import React, { useState } from "react";
import assignmentService from "../../services/assignmentService";


const CreateAssignment = () => {


    const [formData, setFormData] = useState({

        title: "",
        description: "",
        subject: "",
        dueDate: "",
        department: "",
        year: "",
        fileUrl: ""

    });



    const handleChange = (e: any) => {


        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });


    };


    const handleSubmit = async (e: any) => {


        e.preventDefault();


        try {


            const result = await assignmentService.addAssignment(
                formData
            );


            console.log(
                "ASSIGNMENT CREATED:",
                result
            );


            alert(
                "Assignment Created Successfully"
            );


        } catch (error) {


            console.log(
                "Assignment create failed",
                error
            );


            alert(
                "Failed to create assignment"
            );


        }


    };




    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">


                <h1 className="text-2xl font-bold mb-6">

                    Create Assignment

                </h1>



                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >



                    <input

                        type="text"

                        name="title"

                        placeholder="Assignment Title"

                        value={formData.title}

                        onChange={handleChange}

                        className="w-full border p-3 rounded-lg"

                    />



                    <textarea

                        name="description"

                        placeholder="Assignment Description"

                        value={formData.description}

                        onChange={handleChange}

                        className="w-full border p-3 rounded-lg"

                    />



                    <input

                        type="text"

                        name="subject"

                        placeholder="Subject"

                        value={formData.subject}

                        onChange={handleChange}

                        className="w-full border p-3 rounded-lg"

                    />



                    <input

                        type="date"

                        name="dueDate"

                        value={formData.dueDate}

                        onChange={handleChange}

                        className="w-full border p-3 rounded-lg"

                    />



                    <input

                        type="text"

                        name="department"

                        placeholder="Department"

                        value={formData.department}

                        onChange={handleChange}

                        className="w-full border p-3 rounded-lg"

                    />



                    <input

                        type="text"

                        name="year"

                        placeholder="Year"

                        value={formData.year}

                        onChange={handleChange}

                        className="w-full border p-3 rounded-lg"

                    />



                    <input

                        type="text"

                        name="fileUrl"

                        placeholder="File URL (optional)"

                        value={formData.fileUrl}

                        onChange={handleChange}

                        className="w-full border p-3 rounded-lg"

                    />




                    <button

                        type="submit"

                        className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700"

                    >

                        Create Assignment

                    </button>



                </form>



            </div>


        </div>

    );


};


export default CreateAssignment;