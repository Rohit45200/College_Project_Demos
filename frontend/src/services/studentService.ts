import api from './api';
import { StudentProfile } from '../types';


export const studentService = {

  getProfile: async (): Promise<StudentProfile> => {

    try {

      const response = await api.get('/students/profile');

      console.log("PROFILE FROM BACKEND:", response.data);

      return response.data;

    } catch (error) {

      console.log("Profile API Error:", error);

      throw error;

    }

  },

  getAllSchedules: async () => {

    const response = await api.get(
      "/schedule/all"
    );

    return response.data;

  },


  /**
   * Update student profile
   * PUT /api/students/profile
   */
  updateProfile: async (updatedData: Partial<StudentProfile>): Promise<StudentProfile> => {
    try {
      const response = await api.put('/students/profile', updatedData);
      return response.data;
    } catch {
      const current = await studentService.getProfile();
      const updated = { ...current, ...updatedData };
      localStorage.setItem('sec_student_profile', JSON.stringify(updated));
      return updated;
    }
  }


};

export default studentService;
