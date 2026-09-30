import React, { useEffect, useState } from "react";
import adminService from "../../services/adminService";
import { useNavigate } from "react-router-dom";


interface Schedule {

    _id: string;

    subject: string;

    facultyName: string;

    department: string;

    year: string;

    section: string;

    day: string;

    startTime: string;

    endTime: string;

    roomNo: string;

}



const ManageSchedule = () => {


    const [schedules, setSchedules] = useState<Schedule[]>([]);

    const navigate = useNavigate();



    useEffect(() => {

        fetchSchedules();

    }, []);



    const fetchSchedules = async () => {

        try {

            const data = await adminService.getAllSchedules();


            console.log(
                "SCHEDULE DATA:",
                data
            );


            setSchedules(data);


        }
        catch (error) {

            console.log(
                "FETCH SCHEDULE ERROR:",
                error
            );

        }

    };



    const handleDeleteSchedule = async (id: string) => {


        const confirmDelete = window.confirm(
            "Are you sure you want to delete this schedule?"
        );


        if (!confirmDelete) {

            return;

        }


        try {


            await adminService.deleteSchedule(id);


            fetchSchedules();


        }
        catch (error) {


            console.log(
                "DELETE SCHEDULE ERROR:",
                error
            );


        }


    };



    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-7xl mx-auto bg-white p-6 rounded-2xl shadow">


                <h1 className="text-3xl font-bold mb-6">

                    Manage Schedule

                </h1>



                <table className="w-full border">


                    <thead>

                        <tr className="bg-gray-100">


                            <th className="p-3 border">
                                Action
                            </th>

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
                                Room No
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            schedules.map((item) => (

                                <tr key={item._id}>

                                    <td className="p-3 border">

                                        <div className="flex gap-2">

                                            <button
                                                onClick={() =>
                                                    navigate(`/admin/edit-schedule/${item._id}`)
                                                }
                                                className="px-3 py-1 bg-blue-500 text-white rounded"
                                            >
                                                Edit
                                            </button>


                                            <button
                                                onClick={() => handleDeleteSchedule(item._id)}
                                                className="px-3 py-1 bg-red-500 text-white rounded"
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </td>


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
                        }

                    </tbody>


                </table>



            </div>


        </div>

    );


};


export default ManageSchedule;