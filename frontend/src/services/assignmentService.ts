import api from "./api";


const assignmentService = {


    addAssignment: async (data: any) => {

        try {

            const response = await api.post(
                "/assignment/add",
                data
            );

            return response.data;


        } catch(error) {

            console.log(
                "ADD ASSIGNMENT ERROR:",
                error
            );

            throw error;

        }

    },


    getAssignments: async (
        department: string,
        year: string
    ) => {

        try {

            const response = await api.get(
                `/assignment/${department}/${year}`
            );

            return response.data;


        } catch(error) {

            console.log(
                "GET ASSIGNMENT ERROR:",
                error
            );

            throw error;

        }

    }


};


export default assignmentService;