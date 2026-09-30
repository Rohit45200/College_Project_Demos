import React, { useEffect, useState } from "react";
import studentService from "../services/studentService";


const StudentSchedule = () => {


    const [schedules, setSchedules] = useState<any[]>([]);



    useEffect(() => {


        const fetchSchedules = async () => {


            try {


                const data = await studentService.getAllSchedules();


                console.log(
                    "STUDENT SCHEDULE PAGE DATA:",
                    data
                );


                setSchedules(
                    data.schedules || []
                );


            } catch (error) {


                console.log(
                    "SCHEDULE FETCH ERROR:",
                    error
                );


            }


        };


        fetchSchedules();


    }, []);




    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-6">


                <h1 className="text-2xl font-bold mb-6">
                    Class Schedule
                </h1>



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
                                schedules.map((item: any) => (

                                    <tr key={item._id}>

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


        </div>

    );


};


export default StudentSchedule;