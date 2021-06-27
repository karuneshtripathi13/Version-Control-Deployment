const mongoose = require('mongoose');
const fileSchema=new mongoose.Schema({
    id: {
        type:String,
        required : true
    },
    password: {
        type:String,
        required : true
    },
    pname: {
        type:String,
        required : true
    },
    data:[{
        name : {
            type : String,
        },
        time : {
            type : String,
        },
        date : {
            type : String,
        },
        type : {
            type : String,
        },
        path : {
            type : String,
        },
        msg:{
            type : String,
            default:"None"
        },
        prev:{
            type:Array
        }
    }]
});
module.exports=mongoose.model('file',fileSchema)