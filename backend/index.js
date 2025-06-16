import express from "express";
import DBConnection from "./utils/DBConnection.js";
import dotenv from "dotenv";
import ManagerRegister from "./Routes/ManagerRegister.js";
import User from "./Routes/User.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"http://localhost:5173" , // Replace with your frontend URL or use '*' for all origins (not recommended for production)
    credentials: true
}));
app.use(cookieParser());

//api routes
app.use("/api/manager", ManagerRegister);
app.use("/api/user",User);

DBConnection();

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
