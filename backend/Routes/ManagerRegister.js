import express from "express";
import {  checkAccess } from "../controllers/AccessManagerRegisterRout.Controller.js";


const router = express.Router();

router.route("/access").post(checkAccess);

export default router;
