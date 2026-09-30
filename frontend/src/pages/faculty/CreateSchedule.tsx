import React, { useState } from "react";
import facultyService from "../../services/facultyService";


const CreateSchedule = () => {


    const [subject, setSubject] = useState("");
    const [facultyName, setFacultyName] = useState("");
    const [department, setDepartment] = useState("");
    const [year, setYear] = useState("");
    const [section, setSection] = useState("");
    const [day, setDay] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [roomNo, setRoomNo] = useState("");



    const handleSubmit = async (e: React.FormEvent) => {


        e.preventDefault();


        try {


            const data = {

                subject,

                facultyName,

                department,

                year,

                section,

                day,

                startTime,

                endTime,

                roomNo

            };



            const response = await facultyService.createSchedule(data);



            console.log(
                "SCHEDULE CREATED:",
                response
            );


            alert(
                "Schedule created successfully"
            );



            setSubject("");
            setFacultyName("");
            setDepartment("");
            setYear("");
            setSection("");
            setDay("");
            setStartTime("");
            setEndTime("");
            setRoomNo("");



        } catch (error: any) {


            console.log(
                "CREATE SCHEDULE ERROR:",
                error.response?.data?.message
            );


            alert(
                error.response?.data?.message ||
                "Failed to create schedule"
            );


        }


    };




    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow">


                <h1 className="text-2xl font-bold mb-6">
                    Create Schedule
                </h1>



                <div className="grid md:grid-cols-2 gap-5">



                    <input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Subject Name"
                        className="border p-3 rounded-xl"
                    />



                    <input
                        value={facultyName}
                        onChange={(e) => setFacultyName(e.target.value)}
                        placeholder="Faculty Name"
                        className="border p-3 rounded-xl"
                    />



                    <input
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="Department"
                        className="border p-3 rounded-xl"
                    />



                    <input
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Year"
                        className="border p-3 rounded-xl"
                    />



                    <input
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                        placeholder="Section"
                        className="border p-3 rounded-xl"
                    />



                    <select
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        className="border p-3 rounded-xl"
                    >

                        <option>
                            Select Day
                        </option>

                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>

                    </select>



                    <input
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        placeholder="Start Time (10:00 AM)"
                        className="border p-3 rounded-xl"
                    />



                    <input
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        placeholder="End Time (11:00 AM)"
                        className="border p-3 rounded-xl"
                    />



                    <input
                        value={roomNo}
                        onChange={(e) => setRoomNo(e.target.value)}
                        placeholder="Room Number"
                        className="border p-3 rounded-xl"
                    />



                </div>



                <button

                    onClick={handleSubmit}

                    className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl font-bold"

                >

                    Create Schedule

                </button>



            </div>


        </div>

    );


};


export default CreateSchedule;