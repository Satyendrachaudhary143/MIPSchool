import Manager from "../models/Manager.Model.js";
import bcrypt from "bcrypt";
export const checkAccess = async (req, res,) => {
  const { accessPassword, fullName, email, password, mobileNumber, address } = req.body;
  
  // check if the access password is correct
  if (accessPassword !== process.env.ACCESS_PASSWORD) { 
    return res.status(401).json({ message: "wrong access password" ,success: false});
  }

  if (!accessPassword || !fullName || !email || !password || !mobileNumber || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }
  
// check if the email is already in use
const existingManager = await Manager.findOne({ email });
if (existingManager) {
  return res.status(400).json({ message: "Email already in use" });
  }
  
  // hash the password
  const hashedPassword = await bcrypt.hash(password, 10);


    
    const manager = await Manager.create({ fullName, email, password: hashedPassword,mobileNumber,address });
      return res.status(201).json({ message: "Manager registered successfully", success: true, manager });
        
    
}


