import mongoose from "mongoose";

const ManagerSchema = new mongoose.Schema({
fullName: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
    unique: true,
},
password: {
    type: String,
    required: true,
    },
mobileNumber: {
    type: String,
    required: true,
},
address: {
    type: String,
    required: true,
},
role: {
    type: String,
        required: true,
        default: "manager",
    },
}, {timestamps: true});
const Manager = mongoose.model("Manager", ManagerSchema);

export default Manager;
