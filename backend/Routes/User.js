import express from "express";
import { addStudent, addTeacher, login, logout } from "../controllers/User.Controller.js";
import isAuthenticated from "../Middleware/UserAuth.js";


const router = express.Router();

router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/addTeacher").post(isAuthenticated,addTeacher);
router.route("/addStudent").post(isAuthenticated,addStudent);


export default router;