import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
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
  dob: {
  type: Date,
  required: true, // Assuming dob is a date field
  },
  country: {
    type: String,
    required:true
  },
  state: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    },
    subjects: [
        {
    type: String,
    required: true,
        }
    ],
    qualifications: {
    type: String,
    required: true,
  },
    specialization: {
        type: String,
        required: true,
    },
    classesTaught: [
        {
            type: String, // Assuming classesTaught is an array of numbers (class IDs)
            required: true,
        }],
    experience: {
        type: String,
         required: true, // Assuming experience is a number representing years of experience
    },
    salary: {
        type: String, // Assuming salary is a number
        required: true,
    },
    classTeacher: {
        type:String, // Assuming classTeacher is a number representing the class ID
        required: true,
  },
  gender: {
    type: String,
    required:true
  },
  employmentStatus: {
    type: String,
    required: true,
    enum: ["active", "inactive", "on leave"], // Example statuses
  },
  profilePicture: {
    type: String,
    default: "default-profile.png", // Default profile picture
  },

  role: {
    type: String,
    required: true,
    default: "teacher",
  },
    }, { timestamps: true });
export const Teacher = mongoose.model("Teacher", TeacherSchema);