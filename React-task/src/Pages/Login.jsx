import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    navigate("/home");
  };

  return (
    <div className="main-container">

      <div className="login-box">

        <h1 className="text-center mb-4">
          Login Form
        </h1>

        <Form onSubmit={handleSubmit}>

          {/* Email */}
          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>

            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
            />
          </Form.Group>

          {/* Register Link */}
          <div className="login-link">
            Don't have an account?{" "}
            <Link to="/">Register</Link>
          </div>

          {/* Button */}
          <Button
            variant="primary"
            type="submit"
            className="w-100"
          >
            Login
          </Button>

        </Form>
      </div>
    </div>
  );
}