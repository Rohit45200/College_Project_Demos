import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GraduationCap, Menu, X, LogOut, User, LayoutDashboard, Calendar, Bell, BookOpen, ClipboardList, Home as HomeIcon, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const navLinks = [
  //   { name: 'Home', path: '/', icon: HomeIcon },
  //   { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  //   { name: 'Profile', path: '/profile', icon: User },
  //   { name: 'Attendance', path: '/attendance', icon: Calendar },
  //   { name: 'Assignments', path: '/assignments', icon: ClipboardList },
  //   { name: 'Notices', path: '/notices', icon: Bell },
  //   { name: 'Academic Records', path: '/academics', icon: BookOpen },
  //   {
  //     name: 'Schedule',
  //     path: '/student-schedule',
  //     icon: Calendar
  //   },
  // ];
const studentLinks = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Profile', path: '/profile', icon: User },
  { name: 'Attendance', path: '/attendance', icon: Calendar },
  { name: 'Assignments', path: '/assignments', icon: ClipboardList },
  { name: 'Notices', path: '/notices', icon: Bell },
  { name: 'Academic Records', path: '/academics', icon: BookOpen },
  {
    name: 'Schedule',
    path: '/student-schedule',
    icon: Calendar
  },
];


const staffLinks = [
  {
    name: 'Home',
    path: '/',
    icon: HomeIcon
  },
  {
    name: 'Notices',
    path: '/notices',
    icon: Bell
  }
];


const navLinks =
    user?.role === "student"
    ? studentLinks
    : staffLinks;



  const handleLogout = () => {
    logout();
    navigate('/login');
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* SEC Logo & College Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 tracking-tight text-lg">
                  SEC <span className="text-indigo-600">Smart Campus</span>
                </span>
                
              </div>
              <span className="text-xs text-slate-500 font-medium tracking-tight">
                Sengunthar Engineering College
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/60">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${active
                      ? 'bg-white text-indigo-700 shadow-sm shadow-slate-200 border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Section / Login CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
                <Link to="/profile" className="flex items-center gap-2.5 group">
                  <div className="w-9 h-9 rounded-full bg-indigo-100 border-2 border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-xs overflow-hidden">
                    {user.avatarUrl ? (
                      <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      user.name.charAt(0)
                    )}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                      {user.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {user.rollNumber || 'Student'} • {user.department || 'CSE'}
                    </span>
                  </div>
                </Link>

                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors border border-transparent hover:border-rose-200/60"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:brightness-110 active:scale-98 transition-all"
              >
                <span>User Login</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            {user && (
              <Link to="/profile" className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-bold">
                {user.name.charAt(0)}
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${active
                        ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-100'
                        : 'text-slate-700 hover:bg-slate-50'
                      }`}
                  >
                    <Icon className={`w-5 h-5 ${active ? 'text-indigo-600' : 'text-slate-400'}`} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100">
                {user ? (
                  <div className="space-y-3">
                    <div className="px-4 py-2 bg-slate-50 rounded-xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 text-sm">{user.name}</div>
                        <div className="text-xs text-slate-500">{user.email}</div>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-50 text-rose-700 text-sm font-semibold hover:bg-rose-100 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout Account</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-sm shadow-md"
                  >
                    <span>User Login</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
