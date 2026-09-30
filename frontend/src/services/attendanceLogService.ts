import api from "./api";


const attendanceLogService = {

    saveAttendance: async (data:any) => {

        const response = await api.post(
            "/attendance-logs",
            data
        );

        return response.data;

    }

};


export default attendanceLogService;