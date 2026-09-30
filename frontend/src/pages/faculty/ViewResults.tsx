import React, { useEffect, useState } from "react";
import facultyService from "../../services/facultyService";


const ViewResults = () => {


    const [results, setResults] = useState<any[]>([]);
    const [selectedSemester, setSelectedSemester] = useState("All");



    useEffect(() => {


        const fetchResults = async () => {

            try {


                const data = await facultyService.getAllResults();

                console.log(
                    "FULL RESULT DATA:",
                    JSON.stringify(data[0], null, 2)
                );
                



                setResults(data);


                console.log(
                    "ALL RESULTS:",
                    data
                );


            } catch (error) {


                console.log(
                    "FETCH RESULTS ERROR:",
                    error
                );


            }

        };


        fetchResults();


    }, []);


    const filteredResults =
        selectedSemester === "All"
            ? results
            : results.filter(
                (item: any) =>
                    item.semester === Number(selectedSemester)
            );




    return (

        <div className="min-h-screen bg-slate-50 p-6">


            <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow">


                <h1 className="text-2xl font-bold mb-6">
                    Uploaded Marks
                </h1>

                <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    className="border p-3 rounded-xl mb-5"
                >

                    <option value="All">
                        All Semesters
                    </option>

                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (

                        <option key={sem} value={sem}>
                            Semester {sem}
                        </option>

                    ))}

                </select>



                <div className="overflow-x-auto">


                    <table className="w-full border">


                        <thead>

                            <tr className="bg-slate-100">


                                <th className="border p-3">
                                    Student
                                </th>


                                <th className="border p-3">
                                    Semester
                                </th>


                                <th className="border p-3">
                                    Subject
                                </th>

                                <th className="border p-3">
                                    Code
                                </th>


                                <th className="border p-3">
                                    Credits
                                </th>


                                <th className="border p-3">
                                    Marks
                                </th>


                                <th className="border p-3">
                                    Grade
                                </th>


                                <th className="border p-3">
                                    SGPA
                                </th>


                            </tr>


                        </thead>



                        <tbody>


                            {filteredResults.map((item: any) => (


                                <tr key={item._id}>


                                    <td className="border p-3">
                                        {/* {item.studentId?.userId?.name || "Student"} */}
                                        {item.studentId?.name || "Student"}
                                    </td>


                                    <td className="border p-3">
                                        {item.semester}
                                    </td>


                                    <td className="border p-3">
                                        {item.subject}
                                    </td>

                                    <td className="border p-3">
                                        {item.code}
                                    </td>


                                    <td className="border p-3">
                                        {item.credits}
                                    </td>


                                    <td className="border p-3">
                                        {item.totalMarks}
                                    </td>


                                    <td className="border p-3">
                                        {item.grade}
                                    </td>


                                    <td className="border p-3">
                                        {item.sgpa}
                                    </td>


                                </tr>


                            ))}


                        </tbody>


                    </table>


                </div>



            </div>


        </div>

    );


};


export default ViewResults;