import React from 'react';
import AdmissionForm from '../../pages/AdmissionForm';

const ManagerAdmissions = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Admissions</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <AdmissionForm />
      </div>
    </div>
  );
};

export default ManagerAdmissions; 