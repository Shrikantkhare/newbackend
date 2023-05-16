const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        id: {type:Number},
        title: {type:String, required:true,trim:true,},
        price: {
    type:Number,
    required:true,
    trim:true,
},
description: {
    type:String,
    required:true,  
},
category: {
    type:String,
    required:true,
}, 
image: {
    type:String,
    required:true, 
}, 
rating: {
    rate:{type:Number},
    count:{type:String}
},

},{ timestamps:true }

)
module.exports=mongoose.model("Products", productSchema)