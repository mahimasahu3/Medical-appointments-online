import React, { useState } from 'react';
import '../style/SignUpForm.css';// Make sure to create this CSS file for styling

function SignUpForm() {
    const [formData, setFormData] = useState({
        role: '',
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form Data Submitted:', formData);
    };

    const handleReset = () => {
        setFormData({
            role: '',
            name: '',
            phone: '',
            email: '',
            password: ''
        });
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select name="role" id="role" value={formData.role} onChange={handleChange} required>
                    <option value="">Select Role</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-buttons">
                <button type="submit" className="btn btn-submit">Submit</button>
                <button type="button" className="btn btn-reset" onClick={handleReset}>Reset</button>
            </div>
        </form>
    );
}

export default SignUpForm;
