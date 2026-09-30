import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import adminService from "../../services/adminService";


const ManageStudents = () => {

    const navigate = useNavigate();

    const [students, setStudents] = useState<any[]>([]);

    const [search, setSearch] = useState("");

    const [departmentFilter, setDepartmentFilter] = useState("");




    const handleDelete = async (id: string) => {


        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );


        if (!confirmDelete) return;


        try {


            await adminService.deleteStudent(id);


            setStudents(
                students.filter(
                    (student) => student._id !== id
                )
            );


        } catch (error) {


            console.log(
                "DELETE ERROR:",
                error
            );


        }


    };



    useEffect(() => {


        const fetchStudents = async () => {


            try {


                const data = await adminService.getAllStudents();


                setStudents(data);


            }
            catch (error) {


                console.log(
                    "FETCH STUDENTS ERROR:",
                    error
                );


            }


        };


        fetchStudents();


    }, []);




    const filteredStudents = students.filter((student) => {

        const searchText = search.toLowerCase();

        const matchesSearch =
            student.name?.toLowerCase().includes(searchText) ||
            student.rollNumber?.toLowerCase().includes(searchText);

        const matchesDepartment =
            departmentFilter === "" ||
            student.department === departmentFilter;

        return matchesSearch && matchesDepartment;

    });





    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-7xl mx-auto">


                <h1 className="text-3xl font-bold mb-6">
                    Manage Students
                </h1>


                <div className="bg-white p-4 rounded-2xl shadow border mb-6">

                    <div className="grid md:grid-cols-2 gap-4">

                        <input
                            type="text"
                            placeholder="Search by name or roll number..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full border p-3 rounded-lg"
                        />

                        <select
                            value={departmentFilter}
                            onChange={(e) => setDepartmentFilter(e.target.value)}
                            className="w-full border p-3 rounded-lg"
                        >

                            <option value="">
                                All Departments
                            </option>

                            {
                                [...new Set(
                                    students.map(
                                        (student) => student.department
                                    )
                                )].map((department) => (

                                    <option
                                        key={department}
                                        value={department}
                                    >
                                        {department}
                                    </option>

                                ))
                            }

                        </select>

                    </div>

                </div>




                <div className="bg-white rounded-2xl shadow border p-6 overflow-x-auto">


                    <table className="w-full border">


                        <thead>


                            <tr className="bg-slate-100">


                                <th className="p-3 border">
                                    Name
                                </th>


                                <th className="p-3 border">
                                    Roll Number
                                </th>


                                <th className="p-3 border">
                                    Department
                                </th>


                                <th className="p-3 border">
                                    Year
                                </th>


                                <th className="p-3 border">
                                    Semester
                                </th>


                                <th className="p-3 border">
                                    Section
                                </th>

                                <th className="p-3 border">
                                    Action
                                </th>



                            </tr>


                        </thead>



                        <tbody>


                            {
                                // students.map((student) => (
                                filteredStudents.map((student) => (


                                    <tr key={student._id}>


                                        <td className="p-3 border">
                                            {student.name}
                                        </td>


                                        <td className="p-3 border">
                                            {student.rollNumber}
                                        </td>


                                        <td className="p-3 border">
                                            {student.department}
                                        </td>


                                        <td className="p-3 border">
                                            {student.year}
                                        </td>


                                        <td className="p-3 border">
                                            {student.semester}
                                        </td>


                                        <td className="p-3 border">
                                            {student.section}
                                        </td>


                                        <td className="p-3 border">


                                            <div className="flex gap-2">


                                                <button

                                                    onClick={() => navigate(`/admin/students/${student._id}`)}

                                                    className="px-3 py-1 bg-blue-500 text-white rounded-lg"

                                                >
                                                    View
                                                </button>


                                                <button

                                                    onClick={() => navigate(`/admin/edit-student/${student._id}`)}

                                                    className="px-3 py-1 bg-blue-500 text-white rounded-lg"

                                                >

                                                    Edit

                                                </button>



                                                <button

                                                    onClick={() => handleDelete(student._id)}

                                                    className="px-3 py-1 bg-red-500 text-white rounded-lg"

                                                >

                                                    Delete

                                                </button>


                                            </div>


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


export default ManageStudents;