import api from './api';
import { User } from '../types';

export const MOCK_USER: User = {
  id: 'usr_sec_2026_01',
  name: 'Karthik S',
  email: 'karthik.22cse@sengunthar.ac.in',
  role: 'student',
  rollNumber: '22CSE104',
  department: 'Computer Science & Engineering',
  year: '4th Year',
  semester: 8,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
};

export const authService = {
  /**
   * Login student, faculty, or admin
   * Calls POST /api/auth/login
   */
  login: async (email: string, password: string, role: 'student' | 'faculty' | 'admin' = 'student'): Promise<{ user: User; token: string }> => {
    try {
      const response = await api.post('/auth/login', { email, password, role });
      const { user, token } = response.data;
      localStorage.setItem('token', token || 'sec_jwt_token_demo_2026');
      localStorage.setItem('user', JSON.stringify(user));
      return { user, token };
     
    } catch (error: any) {

      throw error;

    }
  },

  /**
   * Logout user
   */
  logout: (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  /**
   * Get current authenticated user from localStorage or API
   */
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;
    try {
      return JSON.parse(userStr) as User;
    } catch {
      return null;
    }
  },

  /**
   * Check if token exists
   */
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('token');
  }
};

export default authService;
