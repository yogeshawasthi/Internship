const mongoose = require("mongoose");

const productSchema = mongoose.schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    imageurl:{
        type:String,
        required:true,
    },

},{timestamps:true})

const modal = mongoose.modal("product",productSchema);
module.export = modal;