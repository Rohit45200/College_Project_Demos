import api from "./api";


const adminService = {


    // Get All Students

    getAllStudents: async () => {

        try {

            const response = await api.get(
                "/students/all"
            );


            console.log(
                "ADMIN STUDENTS DATA:",
                response.data
            );


            return response.data.students;


        } catch (error) {


            console.log(
                "ADMIN STUDENT FETCH ERROR:",
                error
            );


            throw error;

        }

    },

    // Delete Student

    deleteStudent: async (id: string) => {


        try {


            const response = await api.delete(
                `/students/${id}`
            );


            console.log(
                "DELETE RESPONSE:",
                response.data
            );


            return response.data;



        } catch (error) {


            console.log(
                "DELETE STUDENT ERROR:",
                error
            );


            throw error;

        }


    },


    // Create Student

    createStudent: async (data: any) => {


        try {


            const response = await api.post(

                "/students/create",

                data

            );


            console.log(
                "CREATE STUDENT RESPONSE:",
                response.data
            );


            return response.data;



        } catch (error) {


            console.log(
                "CREATE STUDENT ERROR:",
                error
            );


            throw error;


        }


    },

    getStudentById: async (id: string) => {


        const response = await api.get(

            `/students/${id}`

        );


        return response.data.student;


    },

    // Update Student

    updateStudent: async (id: string, data: any) => {

        try {

            const response = await api.put(

                `/students/${id}`,

                data

            );


            console.log(
                "UPDATE STUDENT RESPONSE:",
                response.data
            );


            return response.data;


        } catch (error) {


            console.log(
                "UPDATE STUDENT ERROR:",
                error
            );


            throw error;


        }

    },

    // Get Admin Dashboard Stats

    getDashboardStats: async () => {

        try {

            const response = await api.get(
                "/admin/dashboard-stats"
            );


            console.log(
                "ADMIN DASHBOARD STATS:",
                response.data
            );


            return response.data;


        } catch (error) {


            console.log(
                "ADMIN DASHBOARD ERROR:",
                error
            );


            throw error;

        }

    },



    // Get All Faculty

    getAllFaculty: async () => {

        try {

            const response = await api.get(
                "/admin/faculty"
            );


            console.log(
                "FACULTY DATA:",
                response.data
            );


            return response.data.faculty;


        } catch (error) {


            console.log(
                "GET FACULTY ERROR:",
                error
            );


            throw error;

        }

    },


    // Create Faculty

    createFaculty: async (data: any) => {

        try {

            const response = await api.post(

                "/admin/faculty/create",

                data

            );


            console.log(
                "CREATE FACULTY RESPONSE:",
                response.data
            );


            return response.data;


        }
        catch (error) {


            console.log(
                "CREATE FACULTY ERROR:",
                error
            );


            throw error;

        }

    },


    // Delete Faculty

    deleteFaculty: async (id: string) => {

        try {

            const response = await api.delete(

                `/admin/faculty/${id}`

            );


            console.log(
                "DELETE FACULTY RESPONSE:",
                response.data
            );


            return response.data;


        }
        catch (error) {

            console.log(
                "DELETE FACULTY ERROR:",
                error
            );


            throw error;

        }

    },


    // Get All Notices

    getAllNotices: async () => {

        try {

            const response = await api.get(
                "/notices/all"
            );


            console.log(
                "ADMIN NOTICES:",
                response.data
            );


            return response.data;


        }
        catch (error) {

            console.log(
                "GET NOTICES ERROR:",
                error
            );


            throw error;

        }

    },


    // Delete Notice

    deleteNotice: async (id: string) => {

        try {

            const response = await api.delete(

                `/notices/${id}`

            );


            console.log(
                "DELETE NOTICE:",
                response.data
            );


            return response.data;


        }
        catch (error) {


            console.log(
                "DELETE NOTICE ERROR:",
                error
            );


            throw error;

        }


    },


    createNotice: async (data: any) => {

        try {

            const response = await api.post(
                "/notices/create",
                data
            );

            console.log(
                "CREATE NOTICE RESPONSE:",
                response.data
            );

            return response.data;

        }
        catch (error) {

            console.log(
                "CREATE NOTICE ERROR:",
                error
            );

            throw error;

        }

    },


    // Create Schedule
    createSchedule: async (data: any) => {

        const response = await api.post(
            "/schedules/create",
            data
        );

        return response.data;

    },


    // Get All Schedule

    // Get All Schedule

    // Get All Schedule

    getAllSchedules: async () => {

        const response = await api.get(
            "/schedule/all"
        );

        return response.data.schedules;

    },


    // Get Schedule By Id

    getScheduleById: async (id: string) => {

        try {

            const response = await api.get(

                `/schedule/${id}`

            );


            console.log(
                "SINGLE SCHEDULE:",
                response.data
            );


            return response.data.schedule;


        }
        catch (error) {

            console.log(
                "GET SINGLE SCHEDULE ERROR:",
                error
            );


            throw error;

        }

    },


    // Update Schedule

    updateSchedule: async (id: string, data: any) => {

        try {

            const response = await api.put(

                `/schedule/${id}`,

                data

            );


            console.log(
                "UPDATE SCHEDULE RESPONSE:",
                response.data
            );


            return response.data;


        }
        catch (error) {

            console.log(
                "UPDATE SCHEDULE ERROR:",
                error
            );


            throw error;

        }

    },



    // Delete Schedule

    deleteSchedule: async (id: string) => {

        try {


            const response = await api.delete(

                `/schedule/${id}`

            );


            console.log(
                "DELETE SCHEDULE RESPONSE:",
                response.data
            );


            return response.data;


        }
        catch (error) {


            console.log(
                "DELETE SCHEDULE ERROR:",
                error
            );


            throw error;

        }

    },







};


export default adminService;