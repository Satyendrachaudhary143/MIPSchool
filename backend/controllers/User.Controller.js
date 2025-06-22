import Manager from "../models/Manager.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Teacher } from "../models/Teacher.Model.js";
import { Student } from "../models/Student.Model.js";
export const login = async (req, res) => {
    const { email, password } = req.body;
    // check empty fields
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    // check role
    // const isstusent = 
    const isteacher = await Teacher.findOne({ email });
    if (isteacher) { 
        const inactive = isteacher.employmentStatus
        
        if (inactive === "inactive") {
          return  res.status(400).json({
                message: "teacher is block by admin contact manager",
                success:false
            })
        }
        const isPasswordCorrect = await bcrypt.compare(password, isteacher.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid password" });
        }
        // secure jwt cookies
        // create a token
        const token = jwt.sign({ id: isteacher._id ,role:isteacher.role}, process.env.JWT_SECRET, { expiresIn: "7d" });
        // set the token in the cookies
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({ message: "Teacher logged in successfully", success: true, token, isteacher });

    }
    const existingManager = await Manager.findOne({ email });

    // manager role
    if (existingManager) {
        // check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, existingManager.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid password" });
            
        }
        // secure jwt cookies
    
        // create a token
        const token = jwt.sign({ id: existingManager._id,role:existingManager.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
        // set the token in the cookies
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        
        return res.status(200).json({ message: "Manager logged in successfully", success: true, token,existingManager });
    }
    // teacher role
    return res.status(400).json({ message: "User not found" ,success : false});
}
export const logout = async (req, res) => {
    // clear the token from the cookies
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });
    return res.status(200).json({ message: "Logged out successfully", success: true });
}

export const addTeacher = async (req, res) => {
const { fullName, email, password, mobileNumber, dob, country,state, address, subjects, qualifications,specialization, classesTaught, experience, salary, classTeacher,gender,employmentStatus,profilePicture } = req.body;

    // check empty fields
    if (!fullName || !email || !password || !mobileNumber || !dob || !country || !state || !address || !subjects || !qualifications || !specialization || !classesTaught || !experience || !salary || !gender, !employmentStatus ) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // validate manager role only add teacher
        // const managerRole = req.id; // Assuming req.user is populated with the authenticated user's info
        // const role = await Manager.findById(managerRole).select("role"); // Fetch the role of the manager
        const role = req.role; // Assuming the role is set in the request object by the middleware
        // console.log("Manager Role:", role);
        
        if (role !== "manager") {
            return res.status(403).json({ message: "Unauthorized to add teacher", success: false });
        }
        // check if the teacher already exists
        const existingTeacher = await Teacher.findOne({ email });
        if (existingTeacher) {
            return res.status(400).json({ message: "Teacher already exists" });
        }
        // check email if exists in student or manager collection
        // const inStudent = await Stude 
        const inManager = await Manager.findOne({ email });
        if (inManager) {
            return res.status(400).json({ message: "Email already exists in manager collection" });
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        

        // create a new teacher
        const newTeacher = new Teacher({
            fullName,
            email,
            password: hashedPassword,
            mobileNumber,
            dob,
            country,
            state,
            address,
            subjects,
            qualifications,
            specialization,
            classesTaught,
            experience,
            salary,
            classTeacher,
            gender,
            employmentStatus,
            profilePicture, // Assuming profilePicture is a URL or path to the image
            role: "teacher", // Set the role to teacher
        });

        // save the teacher to the database
        await newTeacher.save();

        return res.status(201).json({ message: "Teacher added successfully", success: true , teacher: newTeacher });
    } catch (error) {
        console.log("Error adding teacher:", error);
        
        return res.status(500).json({ message: "Internal server error", success: false,error });
    }
}

export const addStudent = async (req, res) => {
    const {
        // personal details
        fullName,
        password,
        dob,
        gender,
        nationality,
        address,
        city,
        state,
        // contact details
        email,
        mobileNumber,
        alternateNumber,
        // academic details
        admissionForClass,
        previousClass,
        previousSchoolName,
        previousSchoolAddress,
        // parent details
        father,
        fatherOccupation,
        mother,
        motherOccupation,
        fatherNumber,
        motherNumber,
        // emergency contact and medical details
        bloodgroup,
        medicalConditions,
        allergies,
        emergencyContactName,
        emergencyContactNumber,
        // admission details
        admissionTakenByRole
    } = req.body;

    // check required fields
    if (!fullName || !password || !dob || !gender || !nationality || !address || !city || !state ||
        !email || !mobileNumber || !alternateNumber || !admissionForClass || !previousClass ||
        !father || !fatherOccupation || !mother || !motherOccupation || !fatherNumber || !motherNumber ||
        !bloodgroup || !emergencyContactName || !emergencyContactNumber || !admissionTakenByRole) {
        return res.status(400).json({ message: "All required fields must be filled" });
    }

    try {
        // check if the student already exists
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: "Student already exists" });
        }

        // check email if exists in teacher or manager collection
        const inTeacher = await Teacher.findOne({ email });
        const inManager = await Manager.findOne({ email });

        if (inTeacher || inManager) {
            return res.status(400).json({ message: "Email already exists in another role" });
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10); 
        // studend add only teacher role
        const role = req.role; // Assuming the role is set in the request object by the middleware

        if (role!== "teacher") {
            return res.status(403).json({ message: "Unauthorized to add student", success: false });
        }
      
        // create a new student
        const newStudent = new Student({
            // personal details
            fullName,
            password: hashedPassword,
            dob,
            gender,
            nationality,
            address,
            city,
            state,
            // contact details
            email,
            mobileNumber,
            alternateNumber,
            // academic details
            admissionForClass,
            previousClass,
            previousSchoolName,
            previousSchoolAddress,
            // parent details
            father,
            fatherOccupation,
            mother,
            motherOccupation,
            fatherNumber,
            motherNumber,
            // emergency contact and medical details
            bloodgroup,
            medicalConditions,
            allergies,
            emergencyContactName,
            emergencyContactNumber,
            // admission details
            admissionTakenBy: req.id, // This will come from the authenticated user (teacher/manager)
            admissionTakenByRole,
            role: "student",
            status: "pending" // default status
        });

        // save the student to the database
        await newStudent.save();

        return res.status(201).json({ 
            message: "Student added successfully", 
            success: true, 
            student: newStudent 
        });
    } catch (error) {
        console.log("Error adding student:", error);
        return res.status(500).json({ 
            message: "Internal server error", 
            success: false, 
            error 
        });
    }
}