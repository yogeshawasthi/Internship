const mongoose = require("mongoose");

const userschema = mongoose.schema({
    email:{
        type:String,
        required:true,
    },
    mobileNo:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    sex:{
        type:String,
        enum:['male','female','other'],
    },
    age:{
        type:Number,
        required:true,
    },
}, {timestamps:true});

const modal = mongoose.modal("user",userSchema);
module.export = modal;





