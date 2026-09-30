
import React, { useEffect, useState } from "react";
import facultyService from "../../services/facultyService";
import { useNavigate } from "react-router-dom";
import ViewResults from "./ViewResults";


import {
    Users,
    ClipboardCheck,
    FileText,
    Bell,
    CalendarDays,
    Upload,
    BookOpen,
} from "lucide-react";


const FacultyDashboard = () => {

    const navigate = useNavigate();

    const [students, setStudents] = useState<any[]>([]);

    const [schedules, setSchedules] = useState<any[]>([]);

    const [stats, setStats] = useState({
        totalStudents: 0,
        averageAttendance: 0,
        activeAssignments: 0,
        totalNotices: 0
    });




    useEffect(() => {

        const fetchStudents = async () => {

            try {

                const data = await facultyService.getAllStudents();

                setStudents(data);


                console.log("FACULTY STUDENTS:", data);


            } catch (error) {

                console.log(
                    "Student fetch error:",
                    error
                );

            }

        };


        fetchStudents();

        const fetchDashboardStats = async () => {

            try {

                const data = await facultyService.getDashboardStats();

                console.log(
                    "DASHBOARD STATS:",
                    data
                );

                setStats(data);


            } catch (error) {

                console.log(
                    "Dashboard stats error:",
                    error
                );

            }

        };


        fetchDashboardStats();



        const fetchSchedules = async () => {

            try {

                const data = await facultyService.getAllSchedules();

                console.log(
                    "FACULTY SCHEDULES:",
                    data
                );

                setSchedules(data);

            }
            catch (error) {

                console.log(
                    "Schedule fetch error",
                    error
                );

            }

        };


        fetchSchedules();






    }, []);

    return (

        <div className="min-h-screen bg-slate-50 p-6">

            <div className="max-w-7xl mx-auto">


                {/* Header */}

                <div className="mb-8">

                    <h1 className="text-3xl font-bold text-slate-900">
                        Faculty Dashboard
                    </h1>

                    <p className="text-slate-600 mt-2">
                        Manage students, attendance, assignments, marks and notices.
                    </p>

                </div>



                {/* Statistics */}


                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">


                    <div className="bg-white p-5 rounded-2xl shadow-sm border">

                        <Users className="text-indigo-600" />

                        <h2 className="mt-3 text-2xl font-bold">
                            {stats.totalStudents}
                        </h2>

                        <p className="text-gray-500">
                            Total Students
                        </p>

                    </div>



                    <div className="bg-white p-5 rounded-2xl shadow-sm border">

                        <ClipboardCheck className="text-green-600" />

                        <h2 className="mt-3 text-2xl font-bold">
                            {stats.averageAttendance}%
                        </h2>

                        <p className="text-gray-500">
                            Average Attendance
                        </p>

                    </div>



                    <div className="bg-white p-5 rounded-2xl shadow-sm border">

                        <FileText className="text-orange-600" />

                        <h2 className="mt-3 text-2xl font-bold">
                            {stats.activeAssignments}
                        </h2>

                        <p className="text-gray-500">
                            Active Assignments
                        </p>

                    </div>



                    <div className="bg-white p-5 rounded-2xl shadow-sm border">

                        <Bell className="text-red-600" />

                        <h2 className="mt-3 text-2xl font-bold">
                            {stats.totalNotices}
                        </h2>

                        <p className="text-gray-500">
                            New Notices
                        </p>

                    </div>


                </div>





                {/* Quick Actions */}


                <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border">


                    <h2 className="text-xl font-bold mb-5">
                        Quick Actions
                    </h2>



                    <div className="grid md:grid-cols-4 gap-4">


                        <button
                            onClick={() => navigate("/mark-attendance")}
                            className="flex items-center gap-3 p-4 bg-indigo-50 rounded-xl font-semibold hover:bg-indigo-100"
                        >

                            <ClipboardCheck size={20} />
                            Mark Attendance

                        </button>



                        <button
                            onClick={() => navigate("/create-assignment")}
                            className="flex items-center gap-3 p-4 bg-green-50 rounded-xl font-semibold hover:bg-green-100"
                        >

                            <BookOpen size={20} />
                            Create Assignment

                        </button>



                        <button
                            onClick={() => navigate("/upload-marks")}
                            className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl font-semibold hover:bg-yellow-100"
                        >

                            <Upload size={20} />
                            Upload Marks

                        </button>

                        <button
                            onClick={() => navigate("/view-results")}
                            className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl font-semibold hover:bg-blue-100"
                        >

                            <FileText size={20} />
                            View Uploaded Marks

                        </button>


                        <button
                            onClick={() => navigate("/create-notice")}
                            className="flex items-center gap-3 p-4 bg-red-50 rounded-xl font-semibold hover:bg-red-100"
                        >

                            <Bell size={20} />

                            Create Notice

                        </button>


                        <button
                            onClick={() => navigate("/create-schedule")}
                            className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl font-semibold hover:bg-purple-100"
                        >

                            <CalendarDays size={20} />

                            Create Schedule

                        </button>
                    </div>


                </div>



                {/* Class Schedule */}


                <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border">


                    <h2 className="text-xl font-bold mb-5">
                        Class Schedule
                    </h2>



                    <div className="overflow-x-auto">


                        <table className="w-full border">


                            <thead>


                                <tr className="bg-slate-100">


                                    <th className="p-3 border">
                                        Subject
                                    </th>


                                    <th className="p-3 border">
                                        Faculty
                                    </th>


                                    <th className="p-3 border">
                                        Department
                                    </th>


                                    <th className="p-3 border">
                                        Year
                                    </th>


                                    <th className="p-3 border">
                                        Section
                                    </th>


                                    <th className="p-3 border">
                                        Day
                                    </th>


                                    <th className="p-3 border">
                                        Time
                                    </th>


                                    <th className="p-3 border">
                                        Room
                                    </th>


                                </tr>


                            </thead>




                            <tbody>


                                {
                                    schedules.length > 0 ? (

                                        schedules.map((item: any) => (


                                            <tr
                                                key={item._id}
                                                className="hover:bg-slate-50"
                                            >


                                                <td className="p-3 border">
                                                    {item.subject}
                                                </td>



                                                <td className="p-3 border">
                                                    {item.facultyName}
                                                </td>



                                                <td className="p-3 border">
                                                    {item.department}
                                                </td>



                                                <td className="p-3 border">
                                                    {item.year}
                                                </td>



                                                <td className="p-3 border">
                                                    {item.section}
                                                </td>



                                                <td className="p-3 border">
                                                    {item.day}
                                                </td>



                                                <td className="p-3 border">
                                                    {item.startTime} - {item.endTime}
                                                </td>



                                                <td className="p-3 border">
                                                    {item.roomNo}
                                                </td>



                                            </tr>


                                        ))


                                    ) : (


                                        <tr>


                                            <td
                                                colSpan={8}
                                                className="p-5 text-center text-gray-500"
                                            >

                                                No Schedule Available

                                            </td>


                                        </tr>


                                    )
                                }


                            </tbody>


                        </table>


                    </div>


                </div>







            </div>

        </div>

    );

};


export default FacultyDashboard;