import React, { useState } from "react";
import facultyService from "../../services/facultyService";


const CreateNotice = () => {


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Department");
    const [importance, setImportance] = useState("Normal");



    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();


        try {


            const data = {

                title,
                description,
                category,
                importance,
                author: "Faculty Department"

            };



            const response =
                await facultyService.createNotice(data);



            console.log(
                "NOTICE CREATED:",
                response
            );



            alert(
                "Notice created successfully"
            );



            setTitle("");
            setDescription("");



        } catch (error: any) {


            console.log(
                "NOTICE ERROR:",
                error.response?.data
            );


            alert(
                "Failed to create notice"
            );


        }


    };



    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">


                <h1 className="text-2xl font-bold mb-5">
                    Create Notice
                </h1>



                <form onSubmit={handleSubmit}
                    className="space-y-5">



                    <div>

                        <label className="font-semibold">
                            Notice Title
                        </label>

                        <input

                            value={title}
                            onChange={(e) => setTitle(e.target.value)}

                            className="w-full border p-3 rounded-xl"

                            placeholder="Enter notice title"

                        />

                    </div>




                    <div>

                        <label className="font-semibold">
                            Description
                        </label>


                        <textarea

                            value={description}

                            onChange={(e) => setDescription(e.target.value)}

                            className="w-full border p-3 rounded-xl"

                            rows={5}

                            placeholder="Enter notice description"

                        />


                    </div>




                    <div>

                        <label className="font-semibold">
                            Category
                        </label>


                        <select

                            value={category}

                            onChange={(e) => setCategory(e.target.value)}

                            className="w-full border p-3 rounded-xl"

                        >


                            <option>Department</option>

                            <option>Examinations</option>

                            <option>Placements</option>

                            <option>Events</option>

                            <option>Fee Notice</option>


                        </select>


                    </div>




                    <div>

                        <label className="font-semibold">
                            Importance
                        </label>


                        <select

                            value={importance}

                            onChange={(e) => setImportance(e.target.value)}

                            className="w-full border p-3 rounded-xl"

                        >


                            <option>Normal</option>

                            <option>High</option>

                            <option>Urgent</option>


                        </select>


                    </div>




                    <button

                        className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold"

                    >

                        Create Notice

                    </button>



                </form>


            </div>


        </div>


    )


}


export default CreateNotice;