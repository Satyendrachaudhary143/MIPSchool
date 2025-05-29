import React, { useState } from 'react';

const AdmissionsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    fatherName: '',
    motherName: '',
    className: '',
    idType: '',
    idNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle admissions logic here
    console.log('Admissions Data:', formData);
    // You might want to clear the form or show a success message here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-full max-w-md mb-4">
        <h3 className="text-2xl font-bold text-center">Admissions Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div className="mt-4">
              <label className="block" htmlFor="fullName">Full Name</label>
              <input type="text" placeholder="Full Name" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="email">Email</label>
              <input type="email" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="mobile">Mobile</label>
              <input type="text" placeholder="Mobile" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="fatherName">Father's Name</label>
              <input type="text" placeholder="Father's Name" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" name="fatherName" value={formData.fatherName} onChange={handleInputChange} required />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="motherName">Mother's Name</label>
              <input type="text" placeholder="Mother's Name" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" name="motherName" value={formData.motherName} onChange={handleInputChange} required />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="className">Applying for Class</label>
              <select className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" name="className" value={formData.className} onChange={handleInputChange} required>
                <option value="">Select Class</option>
                <option value="1">1st Grade</option>
                <option value="2">2nd Grade</option>
                <option value="3">3rd Grade</option>
                <option value="4">4th Grade</option>
                <option value="5">5th Grade</option>
                <option value="6">6th Grade</option>
                <option value="7">7th Grade</option>
                <option value="8">8th Grade</option>
                <option value="9">9th Grade</option>
                <option value="10">10th Grade</option>
                <option value="11">11th Grade</option>
                <option value="12">12th Grade</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="idType">ID Option</label>
              <select className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" name="idType" value={formData.idType} onChange={handleInputChange} required>
                <option value="">Select ID Type</option>
                <option value="idCard">Previous School ID Card</option>
                <option value="adharcard">Adharcard</option>
                <option value="birthcertificate">Birth Certificate</option>
              </select>
            </div>
             <div className="mt-4">
              <label className="block" htmlFor="idNumber">ID Number</label>
              <input type="text" placeholder="ID Number" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" name="idNumber" value={formData.idNumber} onChange={handleInputChange} required />
            </div>
            <div className="flex items-baseline justify-between">
              <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Submit Application</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionsPage; 