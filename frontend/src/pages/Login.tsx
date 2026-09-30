import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, Lock, Mail, ShieldCheck, UserCheck, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [role, setRole] = useState<'student' | 'faculty' | 'admin'>('student');
  // const [email, setEmail] = useState('karthik.22cse@sengunthar.ac.in');
  // const [password, setPassword] = useState('sec2026pass');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Where to redirect after login (default /dashboard)
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email address and password');
      return;
    }

    setLoading(true);
    setError(null);

    // try {
    //   await login(email, password, role);
    //   navigate(from, { replace: true });
    // } 
    // --------------------------------------
    try {

       await login(email,password,role);


      const loggedUser = JSON.parse(
        localStorage.getItem("user") || "{}"
      );


      if (loggedUser.role === "student") {


        navigate("/student-dashboard", {
          replace: true
        });


      }
      else if (loggedUser.role === "faculty") {


        navigate("/faculty-dashboard", {
          replace: true
        });


      }
      else if (loggedUser.role === "admin") {


        navigate("/admin-dashboard", {
          replace: true
        });


      }

    }
    // --------------------------------------

    catch (err: any) {
      setError(err?.response?.data?.message || 'Invalid credentials or connection error. Try demo login.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemoFill = (selectedRole: 'student' | 'faculty' | 'admin') => {
    setRole(selectedRole);
    if (selectedRole === 'student') {
      setEmail('karthik.22cse@sengunthar.ac.in');
      setPassword('student2026');
    } else if (selectedRole === 'faculty') {
      setEmail('senthilkumar.cse@sengunthar.ac.in');
      setPassword('faculty2026');
    } else {
      setEmail('admin.erp@sengunthar.ac.in');
      setPassword('admin2026');
    }
  };

  return (
    <div className="min-h-[85vh] bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">

        {/* Header Branding */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white shadow-lg shadow-indigo-500/25 mb-2">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            SEC Smart Campus Portal
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Sengunthar Engineering College • Official ERP Sign In
          </p>
        </div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/80 p-8 space-y-6"
        >

          {/* Role Selector Pills */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select User Role
            </label>
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/60">
              <button
                type="button"
                // onClick={() => handleQuickDemoFill('student')}
                onClick={() => setRole('student')}
                className={`py-2 text-xs font-bold rounded-xl transition-all ${role === 'student'
                  ? 'bg-white text-indigo-700 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Student
              </button>
              <button
                type="button"
                // onClick={() => handleQuickDemoFill('faculty')}
                onClick={() => setRole('faculty')}
                className={`py-2 text-xs font-bold rounded-xl transition-all ${role === 'faculty'
                  ? 'bg-white text-indigo-700 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Faculty
              </button>
              <button
                type="button"
                // onClick={() => handleQuickDemoFill('admin')}
                onClick={() => setRole('admin')}
                className={`py-2 text-xs font-bold rounded-xl transition-all ${role === 'admin'
                  ? 'bg-white text-indigo-700 shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Admin
              </button>
            </div>
          </div>

          {/* Alert Error Banner */}
          {error && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Institutional Email Address / Roll Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. karthik.22cse@sengunthar.ac.in"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-800 text-xs font-medium placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/30 focus:border-indigo-600 transition"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Password
                </label>
                <a href="#" className="text-[11px] font-bold text-indigo-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-800 text-xs font-medium placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600/30 focus:border-indigo-600 transition"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                />
                <span className="text-xs text-slate-600 font-medium">Keep me authenticated</span>
              </label>
            </div>

            {/* Login Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white font-bold text-sm shadow-lg shadow-indigo-600/25 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <span>Signing In...</span>
              ) : (
                <>
                  <span>Login to Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

          </form>

          {/* Quick Demo Helper */}
          {/* <div className="pt-4 border-t border-slate-100">
            <div className="text-[11px] text-slate-500 font-semibold text-center mb-2 flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Quick Demo Sign In (One-Click Test)</span>
            </div>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => {
                  handleQuickDemoFill('student');
                  login('karthik.22cse@sengunthar.ac.in', 'sec2026pass', 'student').then(() => navigate('/dashboard'));
                }}
                className="px-3 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-200/80 rounded-lg text-xs font-bold hover:bg-indigo-100 transition-colors"
              >
                Demo Student
              </button>
              <button
                onClick={() => {
                  handleQuickDemoFill('faculty');
                  login('senthilkumar.cse@sengunthar.ac.in', 'sec2026pass', 'faculty').then(() => navigate('/dashboard'));
                }}
                className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200/80 rounded-lg text-xs font-bold hover:bg-purple-100 transition-colors"
              >
                Demo Faculty
              </button>
            </div>
          </div> */}

        </motion.div>

        {/* Security Notice Footer */}
        <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Secured by SEC Center for Information Technology (CIT)</span>
        </div>

      </div>
    </div>
  );
};

export default Login;
