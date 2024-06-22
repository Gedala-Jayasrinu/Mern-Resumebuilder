import { Schema, model } from 'mongoose';

const resumeSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  education: String,
  experience: String,
  skills: String,
});

const Resume = model('Resume', resumeSchema);

export default Resume;
