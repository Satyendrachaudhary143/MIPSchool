import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true,
    },
    classTeacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true,
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    }],
 
   
}, { timestamps: true });
export const Class = mongoose.model("Class", ClassSchema);