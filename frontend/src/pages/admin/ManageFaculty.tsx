import React, { useEffect, useState } from "react";
import adminService from "../../services/adminService";


interface Faculty {

    _id: string;

    name: string;

    email: string;

    role: string;

}



const ManageFaculty = () => {


    const [showForm, setShowForm] = useState(false);


    const [formData, setFormData] = useState({

        name: "",

        email: "",

        password: ""

    });


    const [faculty, setFaculty] = useState<Faculty[]>([]);


    useEffect(() => {


        fetchFaculty();


    }, []);



    const fetchFaculty = async () => {


        try {


            const data = await adminService.getAllFaculty();


            setFaculty(data);


        }
        catch (error) {


            console.log(
                "FACULTY FETCH ERROR:",
                error
            );


        }


    };



    const handleCreateFaculty = async () => {

        try {


            await adminService.createFaculty(
                formData
            );


            setFormData({

                name: "",

                email: "",

                password: ""

            });


            setShowForm(false);


            fetchFaculty();



        }
        catch (error) {


            console.log(
                "CREATE FACULTY ERROR:",
                error
            );


        }

    };



    const handleDeleteFaculty = async (id: string) => {

        try {


            const confirmDelete = window.confirm(
                "Are you sure you want to delete this faculty?"
            );


            if (!confirmDelete) {

                return;

            }


            await adminService.deleteFaculty(id);



            fetchFaculty();



        }
        catch (error) {


            console.log(
                "DELETE FACULTY ERROR:",
                error
            );


        }


    };




    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow">


                <h1 className="text-3xl font-bold mb-6">
                    Manage Faculty
                </h1>



                <button

                    onClick={() => setShowForm(!showForm)}

                    className="mb-6 px-5 py-3 bg-indigo-600 text-white rounded-xl"

                >

                    Add Faculty

                </button>


                {
                    showForm && (

                        <div className="mb-6 p-5 border rounded-xl">


                            <input

                                className="w-full border p-3 mb-3 rounded"

                                placeholder="Faculty Name"

                                value={formData.name}

                                onChange={(e) =>

                                    setFormData({

                                        ...formData,

                                        name: e.target.value

                                    })

                                }

                            />


                            <input

                                className="w-full border p-3 mb-3 rounded"

                                placeholder="Faculty Email"

                                value={formData.email}

                                onChange={(e) =>

                                    setFormData({

                                        ...formData,

                                        email: e.target.value

                                    })

                                }

                            />



                            <input

                                className="w-full border p-3 mb-3 rounded"

                                placeholder="Password"

                                type="password"

                                value={formData.password}

                                onChange={(e) =>

                                    setFormData({

                                        ...formData,

                                        password: e.target.value

                                    })

                                }

                            />



                            <button

                                onClick={handleCreateFaculty}

                                className="px-5 py-3 bg-green-600 text-white rounded-xl"

                            >

                                Create Faculty

                            </button>



                        </div>

                    )
                }


                <div className="overflow-x-auto">


                    <table className="w-full border">


                        <thead>

                            <tr className="bg-gray-100">


                                <th className="p-3 border">
                                    Name
                                </th>


                                <th className="p-3 border">
                                    Email
                                </th>


                                <th className="p-3 border">
                                    Role
                                </th>


                                <th className="p-3 border">
                                    Action
                                </th>


                            </tr>

                        </thead>



                        <tbody>


                            {
                                faculty.map((item) => (


                                    <tr key={item._id}>


                                        <td className="p-3 border">
                                            {item.name}
                                        </td>


                                        <td className="p-3 border">
                                            {item.email}
                                        </td>


                                        <td className="p-3 border">
                                            {item.role}
                                        </td>


                                        <td className="p-3 border">

                                            <button

                                                onClick={() => handleDeleteFaculty(item._id)}

                                                className="px-4 py-2 bg-red-500 text-white rounded-lg"

                                            >

                                                Delete

                                            </button>

                                        </td>


                                    </tr>


                                ))
                            }


                        </tbody>



                    </table>


                </div>



            </div>


        </div>


    );


};



export default ManageFaculty;