const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/karu', {useNewUrlParser: true, useUnifiedTopology: true});
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
    diag:{
        type:Object
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