import mongoose from "mongoose";

const StudentAttendenceSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
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
    reason: {
        type: String,
    },
  
}, { timestamps: true })
export const StudentAttendence = mongoose.model("StudentAttendence", StudentAttendenceSchema);