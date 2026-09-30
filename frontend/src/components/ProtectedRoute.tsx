import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from './Loader';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('student' | 'faculty' | 'admin')[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader message="Verifying authentication credentials..." />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
          <h2 className="text-xl font-bold text-slate-800">Access Restricted</h2>
          <p className="text-slate-600 text-sm mt-2">
            Your role ({user.role}) does not have permission to access this section of the portal.
          </p>
          <a
            href="/dashboard"
            className="mt-6 inline-block px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 transition"
          >
            Return to Dashboard
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
