const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    product_name :{
        type : String,
        required: [true,"can not be empty"],
    },
        decription :String,
        price:{
            type: Number ,
            required: [true,"can not be empty"],
        }
})
const model = new mongoose.model("products",Schema);

module.exports = model ;

