import React, { useEffect, useState } from "react";
import adminService from "../../services/adminService";


interface Notice {

    id: string;

    title: string;

    description: string;

    category: string;

    date: string;

    author: string;

    importance: string;

}



const ManageNotices = () => {


    const [notices, setNotices] = useState<Notice[]>([]);

    const [showForm, setShowForm] = useState(false);


    const [formData, setFormData] = useState({

        title: "",
        description: "",
        category: "General",
        importance: "Normal",
        author: "SEC Administration"

    });



    useEffect(() => {

        fetchNotices();

    }, []);




    const fetchNotices = async () => {


        try {


            const data = await adminService.getAllNotices();


            setNotices(data);



        }
        catch (error) {


            console.log(
                "FETCH NOTICE ERROR:",
                error
            );


        }


    };




    const handleCreateNotice = async () => {

        try {


            await adminService.createNotice(
                formData
            );


            setFormData({

                title: "",
                description: "",
                category: "General",
                importance: "Normal",
                author: "SEC Administration"

            });


            setShowForm(false);


            fetchNotices();


        }
        catch (error) {


            console.log(
                "CREATE NOTICE ERROR:",
                error
            );


        }


    };





    const handleDeleteNotice = async (id: string) => {


        try {


            const confirmDelete = window.confirm(
                "Are you sure you want to delete this notice?"
            );


            if (!confirmDelete) {

                return;

            }



            await adminService.deleteNotice(id);



            fetchNotices();



        }
        catch (error) {


            console.log(
                "DELETE NOTICE ERROR:",
                error
            );


        }


    };





    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-7xl mx-auto bg-white p-6 rounded-2xl shadow">


                <h1 className="text-3xl font-bold mb-6">

                    Manage Notices

                </h1>


                <button

                    onClick={() => setShowForm(!showForm)}

                    className="mb-6 px-5 py-3 bg-indigo-600 text-white rounded-xl"

                >

                    Create Notice

                </button>

                {
                    showForm && (

                        <div className="mb-6 p-6 border rounded-xl bg-gray-50">


                            <h2 className="text-xl font-bold mb-4">
                                Create New Notice
                            </h2>



                            <input

                                className="w-full border p-3 mb-3 rounded"

                                placeholder="Notice Title"

                                value={formData.title}

                                onChange={(e) =>

                                    setFormData({

                                        ...formData,

                                        title: e.target.value

                                    })

                                }

                            />



                            <textarea

                                className="w-full border p-3 mb-3 rounded"

                                placeholder="Description"

                                value={formData.description}

                                onChange={(e) =>

                                    setFormData({

                                        ...formData,

                                        description: e.target.value

                                    })

                                }

                            />



                            <input

                                className="w-full border p-3 mb-3 rounded"

                                placeholder="Category"

                                value={formData.category}

                                onChange={(e) =>

                                    setFormData({

                                        ...formData,

                                        category: e.target.value

                                    })

                                }

                            />



                            <select

                                className="w-full border p-3 mb-3 rounded"

                                value={formData.importance}

                                onChange={(e) =>

                                    setFormData({

                                        ...formData,

                                        importance: e.target.value

                                    })

                                }

                            >


                                <option value="Normal">
                                    Normal
                                </option>


                                <option value="High">
                                    High
                                </option>


                                <option value="Urgent">
                                    Urgent
                                </option>


                            </select>




                            <input

                                className="w-full border p-3 mb-3 rounded"

                                placeholder="Author"

                                value={formData.author}

                                onChange={(e) =>

                                    setFormData({

                                        ...formData,

                                        author: e.target.value

                                    })

                                }

                            />




                            <button

                                onClick={handleCreateNotice}

                                className="px-5 py-3 bg-green-600 text-white rounded-xl"

                            >

                                Create Notice

                            </button>


                        </div>

                    )
                }



                <div className="overflow-x-auto">


                    <table className="w-full border">


                        <thead>


                            <tr className="bg-gray-100">


                                <th className="p-3 border">
                                    Title
                                </th>


                                <th className="p-3 border">
                                    Category
                                </th>


                                <th className="p-3 border">
                                    Importance
                                </th>


                                <th className="p-3 border">
                                    Date
                                </th>


                                <th className="p-3 border">
                                    Author
                                </th>


                                <th className="p-3 border">
                                    Action
                                </th>


                            </tr>


                        </thead>




                        <tbody>


                            {
                                notices.map((notice) => (


                                    <tr key={notice.id}>


                                        <td className="p-3 border">
                                            {notice.title}
                                        </td>


                                        <td className="p-3 border">
                                            {notice.category}
                                        </td>


                                        <td className="p-3 border">
                                            {notice.importance}
                                        </td>


                                        <td className="p-3 border">
                                            {notice.date}
                                        </td>


                                        <td className="p-3 border">
                                            {notice.author}
                                        </td>


                                        <td className="p-3 border">


                                            <button

                                                onClick={() => handleDeleteNotice(notice.id)}

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



export default ManageNotices;