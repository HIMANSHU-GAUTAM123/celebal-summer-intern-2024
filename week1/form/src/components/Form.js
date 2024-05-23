import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+91-[6-9]\d{9}$|^[6-9]\d{9}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const aadharRegex = /^\d{12}$/;

    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.phoneNo) {
      errors.phoneNo = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phoneNo)) {
      errors.phoneNo = 'Invalid phone number format. Format: +CCC-NNNNNNNNNN';
    }
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.panNo) {
      errors.panNo = 'PAN Number is required';
    } else if (!panRegex.test(formData.panNo)) {
      errors.panNo = 'Invalid PAN number format';
    }
    if (!formData.aadharNo) {
      errors.aadharNo = 'Aadhar Number is required';
    } else if (!aadharRegex.test(formData.aadharNo)) {
      errors.aadharNo = 'Invalid Aadhar number format';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        navigate('/display', { state: { formData } });
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error-message">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group" style={{ position: 'relative' }}>
          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="button" className="show-password-button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Phone No (Format: +CCC-NNNNNNNNNN):</label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          {errors.phoneNo && <p className="error-message">{errors.phoneNo}</p>}
        </div>
        <div className="form-group">
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            {/* Add more countries as needed */}
          </select>
          {errors.country && <p className="error-message">{errors.country}</p>}
        </div>
        <div className="form-group">
          <label>City:</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            {formData.country === 'India' && (
              <>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                {/* Add more cities as needed */}
              </>
            )}
            {formData.country === 'USA' && (
              <>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                {/* Add more cities as needed */}
              </>
            )}
          </select>
          {errors.city && <p className="error-message">{errors.city}</p>}
        </div>
        <div className="form-group">
          <label>PAN No:</label>
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
          />
          {errors.panNo && <p className="error-message">{errors.panNo}</p>}
        </div>
        <div className="form-group">
          <label>Aadhar No:</label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
          />
          {errors.aadharNo && <p className="error-message">{errors.aadharNo}</p>}
        </div>
        <button type="submit" className="submit-button" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
