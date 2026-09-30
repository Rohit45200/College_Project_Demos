export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'faculty' | 'admin';
  rollNumber: string;
  department: string;
  year: string;
  semester: number;
  avatarUrl?: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  rollNumber: string;
  registerNumber: string;
  department: string;
  degree: string;
  section: string;
  year: string;
  semester: number;
  batch: string;
  email: string;
  phone: string;
  dob: string;
  bloodGroup: string;
  address: string;
  guardianName: string;
  guardianPhone: string;
  mentorName: string;
  mentorContact: string;
  hostelStatus: string;
  transportBusNo?: string;
  cgpa: number;
  overallAttendance: number;
  verified: boolean;
  avatarUrl: string;
}

export interface AttendanceSubject {
  id: string;
  code: string;
  name: string;
  faculty: string;
  totalClasses: number;
  attendedClasses: number;
  percentage: number;
  lastUpdated: string;
}

export interface AttendanceDailyLog {
  id: string;
  date: string;
  subjectCode: string;
  subjectName: string;
  timeSlot: string;
  status: 'Present' | 'Absent' | 'On-Duty' | 'Leave';
}

export interface Notice {
  id: string;
  title: string;
  category: 'Examinations' | 'Placements' | 'Circular' | 'Events' | 'Fee Notice' | 'Department';
  description: string;
  date: string;
  author: string;
  importance: 'Urgent' | 'High' | 'Normal';
  hasAttachment?: boolean;
  attachmentName?: string;
}

export interface SubjectGrade {
  code: string;
  name: string;
  credits: number;
  internalMarks: number;
  maxInternal: number;
  externalMarks: number;
  maxExternal: number;
  totalMarks: number;
  grade: 'O' | 'A+' | 'A' | 'B+' | 'B' | 'RA';
  result: 'Pass' | 'Fail' | 'Re-appear';
}

export interface SemesterRecord {
  semester: number;
  sgpa: number;
  creditsEarned: number;
  totalCredits: number;
  subjects: SubjectGrade[];
  examMonthYear: string;
  status: 'Pass' | 'Withheld' | 'Pending';
}
