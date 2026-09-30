import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  User,
  ClipboardCheck,
  Bell,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  Shield,
  Award,
  Zap,
  Clock,
  Layers
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-900 text-white py-16 lg:py-24">
        {/* Background Decorative Shapes */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Side Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-inner">
                <span className="text-base">🎓</span>
                <span>Official Student Portal</span>
              </div>

              {/* Headings */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  Smart Campus Portal
                </h1>
                <h2 className="text-xl sm:text-2xl font-bold text-indigo-200 tracking-tight">
                  Sengunthar Engineering College
                </h2>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-indigo-100/90 leading-relaxed max-w-2xl">
                A complete digital platform where students can manage attendance, academic records, profile information and college updates in one place.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-indigo-900 font-bold text-sm shadow-xl hover:bg-indigo-50 hover:shadow-2xl hover:scale-102 active:scale-98 transition-all"
                >
                  <span>User Login</span>
                  <ArrowRight className="w-4 h-4 text-indigo-700" />
                </Link>

                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600/40 backdrop-blur-md text-white font-bold text-sm border border-white/25 hover:bg-indigo-600/60 hover:border-white/40 transition-all"
                >
                  <span>View User Dashboard</span>
                </Link>
              </div>

              {/* Accreditation Micro Badges */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-indigo-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Autonomous Institution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>NAAC 'A' Grade Accredited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-indigo-300" />
                  <span>NBA Accredited Courses</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side Column - Dashboard Preview Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 shadow-2xl text-slate-800 space-y-6 overflow-hidden">
                
                {/* Floating Glow Corner */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-400/30 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-white/15 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                      KS
                    </div>
                    <div>
                      <div className="font-bold text-sm">Karthik S</div>
                      <div className="text-xs text-indigo-200">22CSE104 • CSE</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Verified
                  </span>
                </div>

                {/* Dashboard Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Metric 1: Attendance */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500">Attendance</span>
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <ClipboardCheck className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-2xl font-extrabold text-emerald-600">92%</div>
                      <div className="text-[11px] font-medium text-slate-500 mt-0.5">Regular & Eligible</div>
                    </div>
                  </div>

                  {/* Metric 2: Profile */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500">Profile</span>
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <User className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-xl font-extrabold text-indigo-700 flex items-center gap-1">
                        <span>Verified</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="text-[11px] font-medium text-slate-500 mt-0.5">Official Credentials</div>
                    </div>
                  </div>

                  {/* Metric 3: Semester */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500">Semester</span>
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                        <BookOpen className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-2xl font-extrabold text-slate-900">8th</div>
                      <div className="text-[11px] font-medium text-slate-500 mt-0.5">Final Year • B.E.</div>
                    </div>
                  </div>

                  {/* Metric 4: Latest Notice Preview */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500">Latest Notice</span>
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                        <Bell className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-xs font-bold text-slate-800 line-clamp-2">
                        Examination schedule released
                      </div>
                      <div className="text-[10px] font-medium text-amber-600 mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Nov/Dec 2026
                      </div>
                    </div>
                  </div>

                </div>

                {/* Live Banner Footer */}
                <div className="bg-indigo-900/40 rounded-xl p-3 border border-white/10 text-white/90 text-xs flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Real-time Anna University & SEC Sync</span>
                  </span>
                  <span className="font-semibold text-indigo-200">Active</span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Campus Management Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Integrated Digital Campus Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Designed specifically for Sengunthar Engineering College students to streamline academic information access, attendance records, and university results.
            </p>
          </div>

          {/* 4 Professional Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Student Profile */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  Student Profile
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Manage personal information, roll number credentials, department details, guardian contact info, and mentor assignments.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                <Link to="/profile" className="flex items-center gap-1 hover:underline">
                  <span>Access Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Attendance Tracking */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Attendance Tracking
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time subject-wise attendance metrics, total classes attended, target calculators, and daily attendance logs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                <Link to="/attendance" className="flex items-center gap-1 hover:underline">
                  <span>Track Attendance</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Latest Notices */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Bell className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  Latest Notices
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Official circulars, examination schedules, placement drive notifications, fee deadlines, and college event announcements.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
                <Link to="/notices" className="flex items-center gap-1 hover:underline">
                  <span>View Notices</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Card 4: Academic Records */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Academic Records
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive semester marksheets, internal assessments, university end-sem grades, and overall CGPA trajectory.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-600">
                <Link to="/academics" className="flex items-center gap-1 hover:underline">
                  <span>Check Grades</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                  Institution Digital Transformation
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  About Smart Campus Portal
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Smart Campus Portal helps students access academic information digitally and provides a simple way to connect with campus services.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Established under Sengunthar Educational Trust, Sengunthar Engineering College is dedicated to providing high quality technical education. The Smart Campus Portal bridges faculty, students, and administration onto a unified digital infrastructure.
                </p>
              </div>

              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center space-y-4">
                <div className="text-3xl font-extrabold text-amber-400">NAAC 'A' Grade</div>
                <div className="text-xs text-indigo-200">Autonomous Engineering College</div>
                <div className="pt-3 border-t border-white/10 text-left text-xs space-y-2 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Digital Student Governance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    <span>Real-time Marksheets & CGPA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>Biometric Attendance Sync</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
