import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Attendance from './pages/Attendance';
import Notices from './pages/Notices';
import CreateNotice from './pages/faculty/CreateNotice';
import AcademicRecords from './pages/AcademicRecords';

// ------------------------------------------
// import StudentDashboard from './pages/student/StudentDashboard';
import FacultyDashboard from './pages/faculty/FacultyDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageStudents from './pages/admin/ManageStudents';
import MarkAttendance from './pages/faculty/MarkAttendance';
import CreateAssignment from './pages/faculty/CreateAssignment';
import UploadMarks from './pages/faculty/UploadMarks';
import ViewResults from './pages/faculty/ViewResults';
import Assignments from './pages/Assignments';
import CreateSchedule from './pages/faculty/CreateSchedule';
import StudentSchedule from './pages/StudentSchedule';
import AddStudent from "./pages/admin/AddStudent";
import EditStudent from "./pages/admin/EditStudent";
import StudentDetails from "./pages/admin/StudentDetails";
import ManageFaculty from "./pages/admin/ManageFaculty";
import ManageNotices from "./pages/admin/ManageNotices";
import ManageSchedule from "./pages/admin/ManageSchedule";
import EditSchedule from "./pages/admin/EditSchedule";
import PrivacyPolicy from "./pages/common/PrivacyPolicy";
import TermsOfUse from "./pages/common/TermsOfUse";

// -------------------------------------------




export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900 selection:bg-indigo-500 selection:text-white">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/notices" element={<Notices />} />

              <Route
                path="/privacy-policy"
                element={
                  <PrivacyPolicy />
                }
              />


              <Route
                path="/terms-of-use"
                element={
                  <TermsOfUse />
                }
              />

              {/* Protected Student Routes */}
              {/* <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              /> */}
              {/* -------------------------------- */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />


              <Route
                path="/student-dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />


              <Route
                path="/faculty-dashboard"
                element={
                  <ProtectedRoute>
                    <FacultyDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/mark-attendance"
                element={
                  <ProtectedRoute>
                    <MarkAttendance />
                  </ProtectedRoute>
                }
              />


              <Route
                path="/create-assignment"
                element={
                  <ProtectedRoute>
                    <CreateAssignment />
                  </ProtectedRoute>
                }
              />


              <Route
                path="/create-notice"
                element={
                  <ProtectedRoute>
                    <CreateNotice />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/view-results"
                element={
                  <ProtectedRoute>
                    <ViewResults />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/upload-marks"
                element={
                  <ProtectedRoute>
                    <UploadMarks />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/create-schedule"
                element={
                  <ProtectedRoute>
                    <CreateSchedule />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/student-schedule"
                element={
                  <ProtectedRoute>
                    <StudentSchedule />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/assignments"
                element={
                  <ProtectedRoute>
                    <Assignments />
                  </ProtectedRoute>
                }
              />



              <Route
                path="/admin-dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/students"
                element={
                  <ProtectedRoute>
                    <ManageStudents />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/add-student"
                element={
                  <ProtectedRoute>
                    <AddStudent />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/faculty"
                element={
                  <ProtectedRoute>
                    <ManageFaculty />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/edit-student/:id"
                element={
                  <EditStudent />
                }
              />


              <Route
                path="/admin/notices"
                element={
                  <ProtectedRoute>
                    <ManageNotices />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/schedule"
                element={
                  <ProtectedRoute>
                    <ManageSchedule />
                  </ProtectedRoute>
                }
              />


              <Route
                path="/admin/edit-schedule/:id"
                element={
                  <ProtectedRoute>
                    <EditSchedule />
                  </ProtectedRoute>
                }
              />
              {/* --------------------------------- */}




              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/attendance"
                element={
                  <ProtectedRoute>
                    <Attendance />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/academics"
                element={
                  <ProtectedRoute>
                    <AcademicRecords />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/students/:id"
                element={<StudentDetails />}
              />

              {/* Catch all fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
