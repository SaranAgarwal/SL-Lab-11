const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
    studentName: String,
    regNo: Number,
    marks: Number
});

module.exports = mongoose.model("student", studentSchema, "SL-LAB-Backend");