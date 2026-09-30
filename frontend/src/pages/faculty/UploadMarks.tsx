import React, { useEffect, useState } from "react";
import facultyService from "../../services/facultyService";


const UploadMarks = () => {


    const [students, setStudents] = useState<any[]>([]);
    const [internalMarks, setInternalMarks] = useState<number>(0);
    const [externalMarks, setExternalMarks] = useState<number>(0);
    const [studentId, setStudentId] = useState("");
    const [semester, setSemester] = useState("");
    const [subject, setSubject] = useState("");
    const [code, setCode] = useState("");
    const [credits, setCredits] = useState(0);
    const [error, setError] = useState("");

    const totalMarks = internalMarks + externalMarks;


    const grade =
        totalMarks >= 95 ? "O" :
            totalMarks >= 90 ? "A+" :
                totalMarks >= 80 ? "A" :
                    totalMarks >= 70 ? "B+" :
                        totalMarks >= 60 ? "B" :
                            "F";



    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        setError("");

        console.log(
            "SELECTED STUDENT ID:",
            studentId
        );

        if (internalMarks > 40) {

            setError("Internal marks cannot be greater than 40");
            return;

        }


        if (externalMarks > 60) {

            setError("External marks cannot be greater than 60");
            return;

        }


        try {

            const data = {

                studentId,
                semester: Number(semester),
                subject,
                code,
                credits,
                internalMarks,
                externalMarks,
                totalMarks,
                grade,
                sgpa: 0

            };


            const response = await facultyService.addResult(data);


            console.log(
                "RESULT UPLOADED:",
                response
            );


            alert("Marks uploaded successfully");
            setStudentId("");
            setSemester("");
            setSubject("");
            setCode("");
            setCredits(0);
            setInternalMarks(0);
            setExternalMarks(0);

        } catch (error: any) {

            console.log(
                "Upload marks error:",
                error.response?.data?.message
            );


            alert(
                error.response?.data?.message ||
                "Failed to upload marks"
            );

        }

    };

    useEffect(() => {


        const fetchStudents = async () => {

            try {

                const data = await facultyService.getAllStudents();

                console.log(
                    "UPLOAD MARKS STUDENTS:",
                    data
                );

                setStudents(
                    data.students || data
                );

            } catch (error: any) {

                console.log(
                    "Upload marks error:",
                    error.response?.data?.message
                );

            }

        };


        fetchStudents();


    }, []);




    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow">


                <h1 className="text-2xl font-bold text-slate-900">
                    Upload Marks
                </h1>


                <p className="text-gray-500 mt-2">
                    Faculty can upload student marks here.
                </p>

                {
                    error && (
                        <p className="text-red-600 font-semibold mt-4">
                            {error}
                        </p>
                    )
                }



                <div className="grid md:grid-cols-2 gap-5 mt-6">



                    {/* Student */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Select Student
                        </label>


                        {/* <select className="w-full border p-3 rounded-xl"> */}
                        <select
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="w-full border p-3 rounded-xl"
                        >

                            <option>
                                Select Student
                            </option>


                            {students.map((student: any) => (

                                <option
                                    key={student._id}
                                    value={student._id}
                                >
                                    {student.name}
                                </option>

                            ))}


                        </select>


                    </div>





                    {/* Semester */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Semester
                        </label>


                        {/* <select className="w-full border p-3 rounded-xl"> */}
                        <select
                            value={semester}
                            onChange={(e) => setSemester(e.target.value)}
                            className="w-full border p-3 rounded-xl"
                        >
                            <option>
                                Select Semester
                            </option>

                            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (

                                <option key={sem} value={sem}>
                                    Semester {sem}
                                </option>

                            ))}


                        </select>


                    </div>





                    {/* Subject Name */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Subject Name
                        </label>


                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Enter Subject Name"
                            className="w-full border p-3 rounded-xl"
                        />

                    </div>





                    {/* Subject Code */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Subject Code
                        </label>


                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="Enter Subject Code"
                            className="w-full border p-3 rounded-xl"
                        />

                    </div>





                    {/* Credits */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Credits
                        </label>


                        <input
                            type="number"
                            value={credits}
                            onChange={(e) => setCredits(Number(e.target.value))}
                            placeholder="Enter Credits"
                            className="w-full border p-3 rounded-xl"
                        />



                    </div>


                    {/* Internal Marks */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Internal Marks
                        </label>


                        <input
                            type="number"
                            value={internalMarks}
                            onChange={(e) => setInternalMarks(Number(e.target.value))}
                            placeholder="Enter Internal Marks"
                            className="w-full border p-3 rounded-xl"
                        />

                    </div>




                    {/* External Marks */}

                    <div>

                        <label className="block font-semibold mb-2">
                            External Marks
                        </label>


                        <input
                            type="number"
                            value={externalMarks}
                            onChange={(e) => setExternalMarks(Number(e.target.value))}
                            placeholder="Enter External Marks"
                            className="w-full border p-3 rounded-xl"
                        />

                    </div>




                    {/* Total Marks */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Total Marks
                        </label>


                        <input
                            type="text"
                            value={totalMarks}
                            className="w-full border p-3 rounded-xl"
                            readOnly
                        />

                    </div>




                    {/* Grade */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Grade
                        </label>


                        <input
                            type="text"
                            value={grade}
                            className="w-full border p-3 rounded-xl"
                            readOnly
                        />

                    </div>

                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
                    >
                        Upload Marks
                    </button>



                </div>



            </div>


        </div>

    );


};


export default UploadMarks;