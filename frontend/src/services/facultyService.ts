import api from "./api";


const facultyService = {


    getAllStudents: async () => {

        const response = await api.get(
            "/faculty/students"
        );


        return response.data.students;

    },


    addResult: async (data: any) => {

        const response = await api.post(
            "/result/add",
            data
        );


        return response.data;

    },


    getAllResults: async () => {

        const response = await api.get(
            "/result/all"
        );

        return response.data.results;

    },


    createNotice: async (data: any) => {

        const response = await api.post(
            "/notices/create",
            data
        );

        return response.data;
    },


    getDashboardStats: async () => {

        const response = await api.get(
            "/faculty/dashboard-stats"
        );


        return response.data;

    },

    createSchedule: async (data: any) => {

        const response = await api.post(
            "/schedule/create",
            data
        );

        return response.data;

    },


    getTodaySchedule: async () => {

        const response = await api.get(
            "/schedule/today"
        );

        return response.data;

    },

    getAllSchedules: async () => {

        const response = await api.get(
            "/schedule/all"
        );

        return response.data.schedules;

    },


};


export default facultyService;