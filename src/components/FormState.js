import React, { useState } from "react";
import Card from "./Card";

function FormState() {
  // Initialize formData with default values for all fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input id="fullName" value={formData.fullName} onChange={handleChange} type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input id="email" value={formData.email} onChange={handleChange} type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input id="password" value={formData.password} onChange={handleChange} type="password" />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;