import React, { useState, useEffect } from "react";
import facultyService from "../../services/facultyService";
import attendanceLogService from "../../services/attendanceLogService";
import { useAuth } from "../../context/AuthContext";

import {
    Users,
    CheckCircle,
    XCircle
} from "lucide-react";

import api from "../../services/api";


const MarkAttendance = () => {

    const { user } = useAuth();
    const [students, setStudents] = useState<any[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedSubject, setSelectedSubject] = useState<any>(null);
    const [subjects, setSubjects] = useState<any[]>([]);
    const [message, setMessage] = useState("");
    const [departments, setDepartments] = useState<string[]>([]);
    const [years, setYears] = useState<string[]>([]);


    useEffect(() => {

        const fetchStudents = async () => {

            try {

                const response = await api.get("/faculty/students");
                const data = response.data.students;


                setStudents(
                    data.map((student: any) => ({

                        id: student._id,

                        name: student.name,

                        roll: student.rollNumber,

                        status: "Present"

                    }))
                );


            } catch (error) {

                console.log(
                    "Student fetch error:",
                    error
                );

            }

        };


        fetchStudents();


    }, []);



    useEffect(() => {

        const fetchDepartments = async () => {

            try {

                const response = await api.get("/subjects/departments");

                setDepartments(response.data.departments);


            } catch (error) {

                console.log(
                    "Department fetch error:",
                    error
                );

            }

        };


        fetchDepartments();


    }, []);


    useEffect(() => {

        const fetchSubjects = async () => {

            try {

                const response = await api.get(
                    `/subjects?department=${selectedDepartment}&year=${selectedYear}`
                );

                console.log(
                    "SUBJECT RESPONSE:",
                    response.data
                );

                setSubjects(response.data.subjects);


                console.log(
                    "SUBJECT ARRAY:",
                    response.data.subjects
                );


            }
            catch (error) {

                console.log(
                    "Subject fetch error:",
                    error
                );

            }

        };


        if (selectedDepartment && selectedYear) {

            fetchSubjects();

        }


    }, [selectedDepartment, selectedYear]);



    useEffect(() => {

        const fetchYears = async () => {

            try {

                const response = await api.get(
                    `/subjects/years?department=${selectedDepartment}`
                );


                console.log(
                    "SELECTED DEPARTMENT:",
                    selectedDepartment
                );


                console.log(
                    "YEAR RESPONSE:",
                    response.data
                );


                setYears(response.data.years);
                console.log(
                    "YEAR ARRAY:",
                    response.data.years
                );


            }
            catch (error) {

                console.log(
                    "Year fetch error:",
                    error
                );

            }

        };


        if (selectedDepartment) {

            fetchYears();

        }


    }, [selectedDepartment]);



    const changeStatus = (id: number, status: string) => {

        setStudents(
            students.map((student) =>
                student.id === id
                    ?
                    { ...student, status }
                    :
                    student
            )
        );

    };



    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-6xl mx-auto">


                <h1 className="text-3xl font-bold text-slate-900">
                    Mark Attendance
                </h1>


                <p className="text-gray-600 mt-2">
                    Faculty can mark daily student attendance.
                </p>




                {/* Selection Section */}


                <div className="bg-white mt-6 p-6 rounded-2xl shadow border">


                    <div className="grid md:grid-cols-3 gap-5">


                        <select
                            className="border p-3 rounded-xl"
                            value={selectedDepartment}

                            onChange={(e) => {

                                setSelectedDepartment(e.target.value);

                                setSelectedYear("");

                                setSelectedSubject("");

                                setSubjects([]);

                            }}
                        >

                            <option value="">
                                Select Department
                            </option>

                            {
                                departments.map((dept) => (
                                    <option
                                        key={dept}
                                        value={dept}
                                    >
                                        {dept}
                                    </option>
                                ))
                            }


                        </select>



                        <select
                            className="border p-3 rounded-xl"
                            value={selectedYear}

                            onChange={(e) => {

                                setSelectedYear(e.target.value);

                                setSelectedSubject("");

                            }}
                        >

                            <option value="">
                                Select Year
                            </option>

                            {
                                years.map((year) => (
                                    <option
                                        key={year}
                                        value={year}
                                    >
                                        {year}
                                    </option>
                                ))
                            }


                        </select>

                        <select
                            className="border p-3 rounded-xl"
                            value={selectedSubject?._id || ""}
                            onChange={(e) => {

                                const subject = subjects.find(
                                    (item) => item._id === e.target.value
                                );

                                setSelectedSubject(subject);

                            }}
                        >


                            <option value="">
                                Select Subject
                            </option>

                            {
                                subjects.map((subject) => (
                                    <option
                                        key={subject._id}
                                        value={subject._id}
                                    >
                                        {subject.subjectName}
                                    </option>
                                ))
                            }

                        </select>



                    </div>


                </div>





                {/* Student List */}


                <div className="bg-white mt-6 rounded-2xl shadow border p-6">


                    <div className="flex items-center gap-2 mb-5">

                        <Users />

                        <h2 className="text-xl font-bold">
                            Student List
                        </h2>


                    </div>



                    <div className="space-y-4">


                        {
                            students.map((student) => (


                                <div
                                    key={student.id}
                                    className="flex justify-between items-center bg-slate-50 p-4 rounded-xl"
                                >


                                    <div>

                                        <h3 className="font-semibold">
                                            {student.name}
                                        </h3>

                                        <p className="text-gray-500">
                                            {student.roll}
                                        </p>

                                    </div>



                                    <div className="flex gap-3">


                                        <button

                                            onClick={() => changeStatus(student.id, "Present")}

                                            className={`px-4 py-2 rounded-xl flex items-center gap-2
${student.status === "Present"
                                                    ? "bg-green-500 text-white"
                                                    : "bg-green-100"}
`}
                                        >

                                            <CheckCircle size={18} />
                                            Present

                                        </button>




                                        <button

                                            onClick={() => changeStatus(student.id, "Absent")}

                                            className={`px-4 py-2 rounded-xl flex items-center gap-2
${student.status === "Absent"
                                                    ? "bg-red-500 text-white"
                                                    : "bg-red-100"}
`}
                                        >

                                            <XCircle size={18} />
                                            Absent

                                        </button>



                                    </div>


                                </div>


                            ))

                        }


                    </div>

                    <button
                        onClick={async () => {


                            if (
                                !selectedDepartment ||
                                !selectedYear ||
                                !selectedSubject
                            ) {

                                setMessage(
                                    "Please select Department, Year and Subject first"
                                );

                                return;

                            }


                            try {

                                // console.log("USER ID:", localStorage.getItem("userId"));

                                const storedUser = JSON.parse(
                                    localStorage.getItem("user") || "{}"
                                );

                                console.log("FACULTY ID:", storedUser.id);

                                console.log("STUDENTS:", students);
                                const data = {

                                    // facultyId: user?.id,
                                    facultyId: storedUser.id,

                                    department: selectedDepartment,

                                    year: selectedYear,

                                    // subject: selectedSubject,
                                    subject: selectedSubject.subjectName,

                                    // subjectCode: "CS001",
                                    subjectCode: selectedSubject.subjectCode,

                                    date: new Date()
                                        .toISOString()
                                        .split("T")[0],

                                    timeSlot: "10:00 AM",

                                    students: students.map((student) => ({

                                        studentId: student.id,

                                        status: student.status

                                    }))

                                };

                                console.log("FINAL ATTENDANCE DATA:", data);

                                const response =
                                    await attendanceLogService.saveAttendance(data);



                                console.log(
                                    "ATTENDANCE SAVE RESPONSE:",
                                    response
                                );



                                setMessage(
                                    "Attendance submission successful"
                                );


                            }
                            catch (error) {


                                console.log(
                                    "ATTENDANCE SAVE ERROR:",
                                    error
                                );

                                setMessage(
                                    "Attendance submission failed"
                                );


                            }


                        }}


                        className="mt-6 w-full bg-indigo-600 text-white p-3 rounded-xl font-semibold"

                    >

                        Save Attendance

                    </button>

                    {
                        message && (

                            <div className="mt-4 text-center font-semibold text-indigo-700">

                                {message}

                            </div>

                        )
                    }




                </div>


            </div>

        </div>


    );


};


export default MarkAttendance;