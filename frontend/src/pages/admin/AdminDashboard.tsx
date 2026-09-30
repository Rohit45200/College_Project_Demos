import React, { useEffect, useState } from "react";
import adminService from "../../services/adminService";

import { useNavigate } from "react-router-dom";
import {
    Users,
    GraduationCap,
    Bell,
    Building2,
    UserCog,
    FileText,
    CalendarDays,
    UserPlus
} from "lucide-react";


const AdminDashboard = () => {

    const navigate = useNavigate();

    const [stats, setStats] = useState({

        totalStudents: 0,

        totalFaculty: 0,

        totalNotices: 0,

        departments: 0

    });


    useEffect(() => {


        const fetchStats = async () => {


            try {


                const data = await adminService.getDashboardStats();


                // setStats({

                //     totalStudents: data.totalStudents,

                //     totalFaculty: 0,

                //     totalNotices: data.totalNotices,

                //     departments: 0

                // });

                setStats({

                    totalStudents: data.totalStudents,

                    totalFaculty: data.totalFaculty,

                    totalNotices: data.totalNotices,

                    departments: data.departments

                });


            }
            catch (error) {


                console.log(
                    "STATS FETCH ERROR:",
                    error
                );


            }


        };


        fetchStats();


    }, []);


    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-7xl mx-auto">


                {/* Header */}

                <div className="mb-8">

                    <h1 className="text-3xl font-bold text-slate-900">
                        Admin Dashboard
                    </h1>


                    <p className="text-gray-600 mt-2">
                        Manage students, faculty, notices and system settings.
                    </p>

                </div>



                {/* Statistics Cards */}


                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">


                    <div className="bg-white p-5 rounded-2xl shadow border">

                        <Users className="text-blue-600" />

                        <h2 className="text-2xl font-bold mt-3">
                            {stats.totalStudents}
                        </h2>

                        <p className="text-gray-500">
                            Total Students
                        </p>

                    </div>



                    <div className="bg-white p-5 rounded-2xl shadow border">

                        <GraduationCap className="text-green-600" />

                        <h2 className="text-2xl font-bold mt-3">
                            {stats.totalFaculty}
                        </h2>

                        <p className="text-gray-500">
                            Total Faculty
                        </p>

                    </div>




                    <div className="bg-white p-5 rounded-2xl shadow border">

                        <Bell className="text-red-600" />

                        <h2 className="text-2xl font-bold mt-3">
                            {stats.totalNotices}
                        </h2>

                        <p className="text-gray-500">
                            Total Notices
                        </p>

                    </div>




                    <div className="bg-white p-5 rounded-2xl shadow border">

                        <Building2 className="text-purple-600" />

                        <h2 className="text-2xl font-bold mt-3">
                            {stats.departments}
                        </h2>

                        <p className="text-gray-500">
                            Departments
                        </p>

                    </div>


                </div>




                {/* Quick Actions */}


                <div className="mt-8 bg-white p-6 rounded-2xl shadow border">


                    <h2 className="text-xl font-bold mb-5">
                        Quick Actions
                    </h2>



                    <div className="grid md:grid-cols-4 gap-4">



                        <button
                            onClick={() => navigate("/admin/students")}
                            className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl font-semibold"
                        >

                            <Users size={20} />

                            Manage Students

                        </button>


                        <button
                            onClick={() => navigate("/admin/add-student")}
                            className="flex items-center gap-3 p-4 bg-indigo-50 rounded-xl font-semibold"
                        >

                            <UserPlus size={20} />

                            Add Student

                        </button>



                        <button

                            onClick={() => navigate("/admin/faculty")}

                            className="flex items-center gap-3 p-4 bg-green-50 rounded-xl font-semibold"

                        >

                            <UserCog size={20} />

                            Manage Faculty

                        </button>




                        <button
                            onClick={() => navigate("/admin/notices")}
                            className="flex items-center gap-3 p-4 bg-red-50 rounded-xl font-semibold">

                            <FileText size={20} />

                            Manage Notices

                        </button>


                        <button

                            onClick={() => navigate("/admin/schedule")}

                            className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl font-semibold"

                        >

                            <CalendarDays size={20} />

                            Manage Schedule

                        </button>


                    </div>


                </div>


            </div>


        </div>

    );


};


export default AdminDashboard;