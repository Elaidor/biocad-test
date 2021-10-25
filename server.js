
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=7777;
const db="mongodb://localhost:27017/biocad";
const Calibrations=require("./models/Calibrations.js");
const Scales=require("./models/Scales.js");

mongoose.connect(db)
    .then(()=>console.log("db connected"))
    .catch(err=>console.log(err));

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
});

app.get("/api/scales/:id",(req,res,next)=>{
    Scales.find({"tam":req.params.id})
        .then(data=>res.json(data))
        .catch(err=>console.log(err))
});

app.get("/api/calibrations/:scale_id",(req,res,next)=>{
    Calibrations.find({"scale_id":req.params.scale_id})
        .then(data=>res.json(data))
        .catch(err=>console.log(err))
});

app.listen(port,()=>{});
