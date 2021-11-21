const express = require("express")
const mongoose = require("mongoose")
const app = express()
const url = "mongodb+srv://sllab:sllab1234@cluster0.szifv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema = require('./schema.js');

mongoose.connect(url).then(()=>{
    console.log("Connected to DB");
})

app.use(express.json())
app.post("/", async(req,res)=>{
    const name = req.body.studentName;
    const reg = req.body.regNo;
    const marks = req.body.marks;

    try {
        const newObj = new mySchema({
            studentName: name,
            regNo: reg,
            marks: marks
        })
        const savedData = await newObj.save();
        res.json({
            "message": "Data is stored",
            "data": savedData
        })
    } catch (err) {
        res.json(err);
    }
})

// app.use("/", (req,res)=>{
//     res.json(
//         {"message": "Hello World"}
//     )
// })

app.listen(3000, ()=>{
    console.log("Express server started");
})