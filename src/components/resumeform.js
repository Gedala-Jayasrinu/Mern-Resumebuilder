import React, { useState } from 'react';
import axios from 'axios';
import './resumeform.css';  // Import the CSS file

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: ''
  });

  const [resumePdf, setResumePdf] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/resumes', formData, {
        responseType: 'arraybuffer'
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      setResumePdf(url);
    } catch (error) {
      console.error('Error generating resume', error);
    }
  };

  return (
    <div className="resume-form-container">
      <form onSubmit={handleSubmit} className="resume-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Education:</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Generate Resume</button>
      </form>
      {resumePdf && (
        <div className="resume-preview">
          <h2>Generated Resume</h2>
          <iframe src={resumePdf} width="100%" height="500px" title="Resume Preview"></iframe>
        </div>
      )}
    </div>
  );
};

export default ResumeForm;
