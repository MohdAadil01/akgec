import React, { useState } from "react";

const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      setMessage("Registration successful!");
      onRegister(data);
    } catch (error) {
      setMessage("Error occurred while registering.");
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Register</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
          required
        />
        <button type="submit" className="form-button">
          Register
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default RegisterForm;
