import express from 'express';
import isAuthenticated from '../Middleware/UserAuth.js';
import { StudentAttendence } from '../controllers/TeacherPanel.Controller.js';


const router = express.Router();
router.route('/studentAttendence').post(isAuthenticated,StudentAttendence)


export default router;