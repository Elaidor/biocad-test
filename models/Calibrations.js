const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const Calibrations= new Schema({
    scale_id:String,
    data:String,
    solution:[{number: Number, ph_value:String}],
    slope:String,
    offset:String,
    user:String
})
module.exports=mongoose.model("Calibration",Calibrations);