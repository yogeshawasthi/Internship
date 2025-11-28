const mongoose = require("mongoose");

const orderschema = mongoose.schema({
    id:{
        type:int,
        required:true,
    },
    deliveryAddress:{
        type:String,
        required:true
    }
    
    
}, {timestamps:true});

const modal = mongoose.modal("order",orderschema);
module.export = modal;





