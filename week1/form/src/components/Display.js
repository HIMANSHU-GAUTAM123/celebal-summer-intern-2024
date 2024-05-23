import React from 'react';
import { useLocation } from 'react-router-dom';
import './Form.css'; 

const Success = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <div>No data available</div>;
  }

  return (
    <div className="success-container">
      <h2>Form Submission Successful</h2>
      <ul>
        <li>First Name: {formData.firstName}</li>
        <li>Last Name: {formData.lastName}</li>
        <li>Username: {formData.username}</li>
        <li>Email: {formData.email}</li>
        <li>Phone No: {formData.phoneNo}</li>
        <li>Country: {formData.country}</li>
        <li>City: {formData.city}</li>
        <li>PAN No: {formData.panNo}</li>
        <li>Aadhar No: {formData.aadharNo}</li>
      </ul>
    </div>
  );
};

export default Success;
