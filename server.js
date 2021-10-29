
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
    Scales.find().or([
            {"tam" : req.params.id},
            {"guid" : req.params.id},
            {"bims" : req.params.id},
        ])
        .then(data=>res.json(data))
        .catch(err=>console.log(err))
});

app.get("/api/calibrations/:scale_id",(req,res,next)=>{
    Calibrations.find({"scale_id":req.params.scale_id})
        .then(data=>res.json(data))
        .catch(err=>console.log(err))
});

app.get("/api/hidden/fill_db_with_test_data",(req,res,next)=>{
    Scales.remove({}).then(result=>console.log(result)).catch(err=>console.log(err))
    Calibrations.remove({}).then(result=>console.log(result)).catch(err=>console.log(err))
    Scales.insertMany(
        {
            "product_name" : "Аналитические весы OHAUS Adventurer АХ324 (B715976163)",
            "type" : "Весы",
            "status" : "Готов к работе",
            "manufacture" : "Ohaus",
            "model" : "AX-123",
            "responsible_division" : "Группа обслуживания лабораторного оборудования",
            "operational_division" : "Химико-аналитическая лаборатория 2.0",
            "mol" : "Иванов Иван Иванович",
            "territory" : "г.Санкт-Петербург(Нойдорф)",
            "serial" : "B715976163",
            "guid" : "508b2a71-662e-4983-ae0c-3cb0c1cd21c5",
            "tam" : "A-001234",
            "bims" : "49db8db1-585f-4b9e-bbf0-8a59698edc8b"
        }
    ).then(result=>console.log(result)).catch(err=>console.log(err))
    Calibrations.insertMany([
        { "scale_id" : "A-001234", "data" : "04.10.19 10:23", "solution" : [ { "number" : 2000460789536, "ph_value" : "1.09" }, { "number" : 2000460789536, "ph_value" : "2.00" }, { "number" : 2000460789536, "ph_value" : "4.01" }, { "number" : 2000460789536, "ph_value" : "7.00" }, { "number" : 2000460789536, "ph_value" : "9.21" } ], "slope" : "98.7", "offset" : "-0.3", "user" : "Иванов Генадий Петрович" },
        { "scale_id" : "A-001234", "data" : "04.10.19 10:23", "solution" : [ { "number" : 2000460789536, "ph_value" : "1.09" }, { "number" : 2000460789536, "ph_value" : "2.00" }, { "number" : 2000460789536, "ph_value" : "4.01" }, { "number" : 2000460789536, "ph_value" : "7.00" }, { "number" : 2000460789536, "ph_value" : "9.21" } ], "slope" : "98.7", "offset" : "-0.3", "user" : "Петров Иван Генадьевич" },
        { "scale_id" : "A-001234", "data" : "04.10.19 10:23", "solution" : [ { "number" : 2000460789536, "ph_value" : "1.09" }, { "number" : 2000460789536, "ph_value" : "2.00" }, { "number" : 2000460789536, "ph_value" : "4.01" }, { "number" : 2000460789536, "ph_value" : "7.00" }, { "number" : 2000460789536, "ph_value" : "9.21" } ], "slope" : "98.7", "offset" : "-0.3", "user" : "Петров Генадий Иванович" },
        { "scale_id" : "A-001234", "data" : "04.10.19 10:23", "solution" : [ { "number" : 2000460789536, "ph_value" : "1.09" }, { "number" : 2000460789536, "ph_value" : "2.00" }, { "number" : 2000460789536, "ph_value" : "4.01" }, { "number" : 2000460789536, "ph_value" : "7.00" }, { "number" : 2000460789536, "ph_value" : "9.21" } ], "slope" : "90.1", "offset" : "-0.5", "user" : "Генадьев Иван Петрович" }
    ]).then(result=>console.log(result)).catch(err=>console.log(err))
    res.status(201).send("Created\n");
})

app.get('*', (req, res, next)=>{
    res.status(405).send("Not implemented\n");
  });

app.listen(port,()=>{});
