import express from "express";
import { addTeacher, login, logout } from "../controllers/User.Controller.js";
import isAuthenticated from "../Middleware/UserAuth.js";


const router = express.Router();

router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/addTeacher").post(isAuthenticated,addTeacher);


export default router;