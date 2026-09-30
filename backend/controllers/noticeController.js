const Notice = require("../models/Notice");



// Create Notice
const createNotice = async (req, res) => {

    try {

        const {
            title,
            description,
            category,
            author,
            importance,
            hasAttachment,
            attachmentName
        } = req.body;



        const notice = await Notice.create({

            title,

            description,

            category,

            author,

            importance,

            hasAttachment,

            attachmentName,

            createdBy: req.user ? req.user.id : null

        });



        res.status(201).json({

            message: "Notice created successfully",

            notice

        });



    } catch (error) {


        console.log("CREATE NOTICE ERROR:", error);


        res.status(500).json({

            message: error.message

        });

    }

};




// Get All Notices
const getAllNotices = async (req, res) => {


    try {


        console.log("GET ALL NOTICE API CALLED");



        const notices = await Notice.find()
            .sort({ createdAt: -1 })
            .lean();



        console.log(
            "NOTICE FROM MONGODB:",
            notices
        );




        const formattedNotices = notices.map((notice) => {


            return {


                id: notice._id,


                title: notice.title,


                description: notice.description,


                category: notice.category,


                date: notice.date
                    ? String(notice.date).substring(0, 10)
                    : "",



                author: notice.author || "SEC Administration",


                importance: notice.importance || "Normal",


                hasAttachment: notice.hasAttachment || false,


                attachmentName: notice.attachmentName || ""

            };


        });



        res.status(200).json(formattedNotices);



    } catch (error) {


        console.log(
            "GET NOTICE ERROR:",
            error
        );


        res.status(500).json({

            message: error.message

        });


    }


};



// Delete Notice

const deleteNotice = async (req, res) => {


    try {


        const notice = await Notice.findByIdAndDelete(
            req.params.id
        );


        if (!notice) {


            return res.status(404).json({

                message: "Notice not found"

            });


        }



        res.status(200).json({

            message: "Notice deleted successfully"

        });



    }
    catch (error) {


        console.log(
            "DELETE NOTICE ERROR:",
            error
        );


        res.status(500).json({

            message: error.message

        });


    }


};





module.exports = {

    createNotice,

    getAllNotices,

    deleteNotice

};