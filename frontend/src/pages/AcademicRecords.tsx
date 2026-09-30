import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';

import {
  BookOpen,
  Award,
  CheckCircle2,
  TrendingUp,
  Download,
  Calendar,
  Layers,
  FileSpreadsheet,
  GraduationCap
} from 'lucide-react';
import { academicService } from '../services/academicService';
import { SemesterRecord } from '../types';

export const AcademicRecords: React.FC = () => {
  const { user } = useAuth();
  const [records, setRecords] = useState<SemesterRecord[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [semesterSGPA, setSemesterSGPA] = useState<any>({});
  const [semesterRecords, setSemesterRecords] = useState<any[]>([]);
  const [cgpa, setCgpa] = useState<number>(0);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [selectedSemester, setSelectedSemester] = useState<number>(8);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchStudentResults = async () => {

      try {

        if (!user?.id) {
          console.log("Student ID not available");
          return;
        }

        console.log("STUDENT ID:", user.id);

        const data = await academicService.getStudentResults(
          user.id
        );

        console.log("API RESPONSE:", data);

        console.log("TOTAL CREDIT FROM API:", data.totalCredits);

        console.log("FINAL RESULTS:", data.results);
      
        setTotalCredits(data.totalCredits || 0);

        setResults(data.results || []);
        setSemesterSGPA(data.semesterSGPA || {});

        setCgpa(data.cgpa || 0);





      } catch (error) {

        console.log(
          "Student result fetch error:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchStudentResults();

  }, [user]);


  const currentSubjects = results[selectedSemester] || [];

  const currentRecord = {

    semester: selectedSemester,

     sgpa: semesterSGPA[selectedSemester] || 0,

    creditsEarned: currentSubjects.reduce(
      (sum: any, item: any) => sum + item.credits,
      0
    ),

    totalCredits: currentSubjects.reduce(
      (sum: any, item: any) => sum + item.credits,
      0
    ),

    examMonthYear: "Apr/May 2026",

    status: "Pass",

    subjects: currentSubjects

  };




  return (
    <div className="min-h-screen bg-slate-50 py-8 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Page Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-purple-600" />
              <span>Academic Performance & Marksheets</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Anna University Grade Sheets • Semester Credit Statements & Overall CGPA Trajectory
            </p>
          </div>

          <button
            onClick={() => alert(`Generating Official Consolidated Grade Sheet Transcript...`)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-700 text-white text-xs font-bold shadow-md hover:bg-purple-800 transition-all self-start sm:self-auto"
          >
            <Download className="w-4 h-4" />
            <span>Download Official Transcript</span>
          </button>
        </div>


        {/* Summary Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Overall CGPA</span>
            <div className="text-3xl font-black text-purple-600 tracking-tight">{cgpa} / 10.0</div>
            <div className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>First Class with Distinction</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Credits Earned</span>
            <div className="text-3xl font-black text-slate-900 tracking-tight">{totalCredits}</div>
            <div className="text-[11px] font-medium text-slate-500 pt-1">
              All Mandatory Core & Elective Credits
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Standing Arrears</span>
            <div className="text-3xl font-black text-emerald-600 tracking-tight">0 <span className="text-xs text-slate-500 font-normal">(Nil)</span></div>
            <div className="text-[11px] font-semibold text-emerald-700 pt-1">
              100% History of Clean Pass
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Selected SGPA</span>
            <div className="text-3xl font-black text-indigo-600 tracking-tight">
              {currentRecord?.sgpa || 9.15}
            </div>
            <div className="text-[11px] font-medium text-slate-500 pt-1">
              Semester {selectedSemester} Performance
            </div>
          </div>

        </div>


        {/* Semester Selection Tabs */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-200/80 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-x-auto py-1 w-full sm:w-auto">
            <span className="text-xs font-extrabold text-slate-500 uppercase px-2">Semester:</span>
            {[8, 7, 6, 5, 4, 3, 2, 1].map((sem) => (
              <button
                key={sem}
                onClick={() => setSelectedSemester(sem)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${selectedSemester === sem
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                Semester {sem}
              </button>
            ))}
          </div>

          {currentRecord && (
            <div className="text-xs font-bold text-slate-500 px-3">
              Exam Session: <span className="text-slate-800 font-extrabold">{currentRecord.examMonthYear}</span>
            </div>
          )}
        </div>


        {/* Semester Marksheet Table */}
        {currentRecord && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Semester {currentRecord.semester} Official Mark Statement
                </h3>
                <p className="text-xs text-slate-500">
                  Credits Earned: <span className="font-bold text-slate-800">{currentRecord.creditsEarned} / {currentRecord.totalCredits}</span> • Semester SGPA: <span className="font-bold text-purple-700">{currentRecord.sgpa}</span>
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold flex items-center gap-1 self-start sm:self-auto">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Result: {currentRecord.status}</span>
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-600 uppercase font-bold text-[10px] tracking-wider">
                    <th className="p-3.5">Subject Code</th>
                    <th className="p-3.5">Subject Description</th>
                    <th className="p-3.5 text-center">Credits</th>
                    <th className="p-3.5 text-center">Internal (20)</th>
                    <th className="p-3.5 text-center">External (80)</th>
                    <th className="p-3.5 text-center">Total (100)</th>
                    <th className="p-3.5 text-center">Letter Grade</th>
                    <th className="p-3.5 text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">

                  {results[selectedSemester]?.map((sub: any) => (
                    <tr key={sub._id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-purple-700">{sub.code}</td>
                      <td className="p-3.5 font-semibold text-slate-800">{sub.subject}</td>
                      <td className="p-3.5 text-center font-medium text-slate-600">{sub.credits}</td>
                      <td className="p-3.5 text-center font-bold text-slate-700">{sub.internalMarks}</td>
                      <td className="p-3.5 text-center font-bold text-slate-700">{sub.externalMarks}</td>
                      <td className="p-3.5 text-center font-black text-slate-900">{sub.totalMarks}</td>
                      <td className="p-3.5 text-center">
                        <span className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-800 font-extrabold text-[11px]">
                          {sub.grade}
                        </span>
                      </td>
                      <td className="p-3.5 text-right">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                          {sub.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Grade Points Guide Legend */}
            <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <span><strong>O:</strong> 10 Points (Outstanding)</span>
                <span><strong>A+:</strong> 9 Points (Excellent)</span>
                <span><strong>A:</strong> 8 Points (Very Good)</span>
                <span><strong>B+:</strong> 7 Points (Good)</span>
              </div>
              <span className="font-medium text-slate-400">Authenticated by Controller of Examinations - SEC</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default AcademicRecords;
