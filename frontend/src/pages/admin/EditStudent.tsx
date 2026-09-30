import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import adminService from "../../services/adminService";


const EditStudent = () => {


    const { id } = useParams();


    const [student, setStudent] = useState<any>(null);


    const [formData, setFormData] = useState({

        name: "",

        rollNumber: "",

        department: "",

        year: "",

        semester: "",

        section: ""

    });



    useEffect(() => {


        const fetchStudent = async () => {


            try {


                const data = await adminService.getStudentById(
                    id as string
                );


                console.log(
                    "EDIT STUDENT DATA:",
                    data
                );


                setStudent(data);

                setFormData({

                    name: data.name || "",

                    rollNumber: data.rollNumber || "",

                    department: data.department || "",

                    year: data.year || "",

                    semester: data.semester || "",

                    section: data.section || ""

                });

                const studentData = data.student || data;


                setStudent(studentData);


                setFormData({

                    name: studentData.name || "",

                    rollNumber: studentData.rollNumber || "",

                    department: studentData.department || "",

                    year: studentData.year || "",

                    semester: studentData.semester || "",

                    section: studentData.section || ""

                });


                console.log(
                    "FORM DATA:",
                    data
                );


            }
            catch (error) {


                console.log(
                    "GET STUDENT ERROR:",
                    error
                );


            }


        };


        fetchStudent();


    }, [id]);



    const handleUpdate = async () => {


        try {


            const response = await adminService.updateStudent(

                id as string,

                formData

            );


            console.log(
                "UPDATE RESPONSE:",
                response
            );


            alert(
                "Student updated successfully"
            );


        }
        catch (error) {


            console.log(
                "UPDATE ERROR:",
                error
            );


        }


    };





    if (!student) {


        return (

            <div className="p-8">

                Loading student data...

            </div>

        );

    }





    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow">


                <h1 className="text-3xl font-bold mb-6">

                    Edit Student

                </h1>



                <div className="space-y-4">


                    <div>

                        <label className="block font-semibold mb-1">
                            Name
                        </label>

                        {/* <input

                            value={formData.name}

                            className="w-full border p-3 rounded-lg"

                            readOnly

                        /> */}

                        <input

                            name="name"

                            value={formData.name}

                            className="w-full border p-3 rounded-lg"

                            onChange={(e) => setFormData({

                                ...formData,

                                name: e.target.value

                            })}

                        />

                    </div>



                    <div>

                        <label className="block font-semibold mb-1">
                            Roll Number
                        </label>

                        {/* <input

                            value={formData.rollNumber}

                            className="w-full border p-3 rounded-lg"

                            readOnly

                        /> */}

                        <input

                            name="rollNumber"

                            value={formData.rollNumber}

                            className="w-full border p-3 rounded-lg"

                            onChange={(e) => setFormData({

                                ...formData,

                                rollNumber: e.target.value

                            })}

                        />

                    </div>



                    <div>

                        <label className="block font-semibold mb-1">
                            Department
                        </label>

                        <input

                            value={formData.department}

                            className="w-full border p-3 rounded-lg"

                            onChange={(e) =>

                                setFormData({

                                    ...formData,

                                    department: e.target.value

                                })

                            }

                        />

                    </div>



                    <div>

                        <label className="block font-semibold mb-1">
                            Year
                        </label>

                        <input

                            value={formData.year}

                            className="w-full border p-3 rounded-lg"

                            onChange={(e) =>

                                setFormData({

                                    ...formData,

                                    year: e.target.value

                                })

                            }

                        />

                    </div>



                    <div>

                        <label className="block font-semibold mb-1">
                            Semester
                        </label>

                        <input

                            value={formData.semester}

                            className="w-full border p-3 rounded-lg"

                            onChange={(e) =>

                                setFormData({

                                    ...formData,

                                    semester: e.target.value

                                })

                            }

                        />

                    </div>



                    <div>

                        <label className="block font-semibold mb-1">
                            Section
                        </label>

                        <input

                            value={formData.section}

                            className="w-full border p-3 rounded-lg"

                            onChange={(e) =>

                                setFormData({

                                    ...formData,

                                    section: e.target.value

                                })

                            }

                        />

                    </div>

                    <button
                    onClick={handleUpdate}
                        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl"
                    >
                        Update Student
                    </button>



                </div>


            </div>


        </div>

    );


};


export default EditStudent;