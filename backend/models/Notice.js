const mongoose = require("mongoose");


const noticeSchema = new mongoose.Schema(
{

    title:{
        type:String,
        required:true
    },


    description:{
        type:String,
        required:true
    },


    category:{
        type:String,
        default:"General"
    },


    date:{
        type:String,
        default: () => new Date().toISOString().split("T")[0]
    },


    author:{
        type:String,
        default:"SEC Administration"
    },


    importance:{
        type:String,
        enum:[
            "Urgent",
            "High",
            "Normal"
        ],
        default:"Normal"
    },


    hasAttachment:{
        type:Boolean,
        default:false
    },


    attachmentName:{
        type:String,
        default:""
    },


    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},
{
    timestamps:true
});


const Notice = mongoose.model(
    "Notice",
    noticeSchema
);


module.exports = Notice;