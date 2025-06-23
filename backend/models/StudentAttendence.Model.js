import mongoose from "mongoose";

const StudentAttendenceSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    class :{
        type: String,
        required: true,
    },
    date: {
        type: String, // Format: dd-mm-yy
        required: true,
    },
    status: {
        type: String,
        enum: ["present", "absent", "late"],
    },
    takenBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true,
    },
   
  
}, { timestamps: true })
export const StudentAttendence = mongoose.model("StudentAttendence", StudentAttendenceSchema);