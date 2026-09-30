import React, { useEffect, useState } from "react";
import assignmentService from "../services/assignmentService";

const Assignments = () => {
    const [assignments, setAssignments] = useState<any[]>([]);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const data = await assignmentService.getAssignments(
                    "cse",
                    "4"
                );

                console.log("ASSIGNMENTS:", data);

                setAssignments(data.assignments);
            } catch (error) {
                console.log(
                    "Assignment fetch error:",
                    error
                );
            }
        };

        fetchAssignments();
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 p-6">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl font-bold mb-6">
                    Assignments
                </h1>

                {assignments.length === 0 ? (
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-gray-500">
                            No assignments available.
                        </p>
                    </div>
                ) : (
                    assignments.map((item) => (

                        <div
                            key={item._id}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-5"
                        >

                            <h2 className="text-2xl font-bold text-slate-900">
                                {item.title}
                            </h2>

                            <p className="mt-3 text-indigo-600 font-semibold">
                                Subject: {item.subject}
                            </p>

                            <p className="mt-3 text-slate-700">
                                {item.description}
                            </p>

                            <p className="mt-4 text-slate-600">
                                <span className="font-semibold">
                                    Due Date:
                                </span>{" "}
                                {new Date(item.dueDate).toLocaleDateString()}
                            </p>

                            {item.fileUrl && (
                                <a
                                    href={item.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-5 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700"
                                >
                                    View Assignment File
                                </a>
                            )}

                        </div>

                    ))
                )}

            </div>

        </div>
    );
};

export default Assignments;