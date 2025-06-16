import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    // personal details
  fullName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  dob: {
    type: Date,
    required: true, // Assuming dob is a date field
    },
    gender: {
        type: String,
    required:true ,   
  },
  nationality: {
    type: String,
    required:true
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    },
    state: {
        type: String,
        required: true,    
    },
    // contact details
    email: {
    type: String,
        required: true,
        unique: true, // Ensure email is unique
    },
    mobileNumber: {
    type: String,
    required: true,
    },
    alternateNumber: {
        type: String,
        required: true,
    },
    // academic details
    admissionForClass: {
        type: String,
        required: true,
    },
    previousClass: {
        type: String,
        required: true,
    },
    previousSchoolName: {
        type: String,
    },
    previousSchoolAddress: {
        type: String,
    },  
 
    // parent details
    father: {
        type: String,
        required: true,
    },
    fatherOccupation: {
        type: String,
        required: true,
    },
    mother: {
        type: String,
        required: true,
    },
    motherOccupation: {
        type: String,
        required: true,
    },
    fatherNumber: {
        type: String,
        required: true,
    },
    motherNumber: {
        type: String,
        required: true,
    },
    // emergency contact // addistional contact details
    bloodgroup: {
        type: String,
        required: true,
    },  
    //not required
    medicalConditions: {
        type: String,
    },
    allergies: {
        type: String,
    },
    // required for admission
    emergencyContactName: {
        type: String,
        required: true,
    },
    emergencyContactNumber: {
        type: String,
        required: true,
    },
    // auth details, who take addmission
    admissionTakenBy: {
    type:mongoose.Schema.Types.ObjectId,
        ref: "Teacher", // Assuming the Teacher is a separate model
        required: true, // Reference to the Teacher  who took the admission
    },
    admissionTakenByRole: {
        type: String,
        required: true, // e.g., "parent", "guardian", "self"
    },

    // status
    status: {
        type: String,
        enum: ["pending","active", "inactive", "graduated", "dropped out"],
        default: "pending", // Default status is pending
    },
  

});

export const Student = mongoose.model("Student", StudentSchema);