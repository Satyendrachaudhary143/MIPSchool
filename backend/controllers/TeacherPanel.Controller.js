import { StudentAttendence as studentatt  } from "../models/StudentAttendence.Model.js";
export const StudentAttendence = async (req, res) => {
    const {students,date,takenBy,className} = req.body;
    try {
        // Validate required fields
        if (!students || !date  || !takenBy || !className) {
            return res.status(400).json({ message: "Missing required fields" });

        }
         // check attendence already taken 
           const existingRecord = await studentatt.findOne({ date, class: className});
            if (existingRecord) {
                return res.status(400).json({ message: `Attendance for student  already recorded for this date` });
        }
        
        // validate attendence taken by teacher role
        const teacherRole = req.role; // Assuming req.user contains the authenticated teacher's info
        if (teacherRole !== "teacher") {
            return res.status(403).json({ message: "Only teachers can take attendance",success: false });
        }


        // validate date [today] farmate dd-mm-yy
       const today = new Date();
       const day = String(today.getDate()).padStart(2, '0');
       const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
       const year = String(today.getFullYear()); // year in yyyy format

        const formattedDate = `${day}-${month}-${year}`;
        
        // formate req date
        // if needed
        

        if (date !== formattedDate) {
            return res.status(400).json({ message: "Date must be today's date in dd-mm-yy format" });
        }
        
        // map students [recieve array of student ids and status ]
        // Create a new attendance record
        const attendanceRecords = students.map(({ studentId, status }) => ({
                studentId,
                date,
                status,
                takenBy,
                class: className, // Assuming className is passed in the request body
         
        }));


       

        // Save the record to the database
        await studentatt.insertMany(attendanceRecords);

        return res.status(201).json({ message: "Attendance recorded successfully", data: attendanceRecords ,success: true});
     }
    catch (error) {
        console.error("Error in StudentAttendence:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}