import express from 'express';
import { createResume } from '../controllers/resumecontrollers.js';

const router = express.Router();

router.post('/resumes', createResume);

export default router;
