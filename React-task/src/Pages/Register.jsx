import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Register = () => {

  const navigate = useNavigate();

  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [showPsw, setShowPsw] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(details);

    // Validation
    if (
      details.name !== "" &&
      details.phone !== "" &&
      details.email !== "" &&
      details.password !== ""
    ) {

      if (
        !details.email.includes("@") ||
        !details.email.includes(".")
      ) {

        toast.warning("Invalid Email ❌");

      } else {

        toast.success("Registered Successfully 😊");

        setDetails({
          name: "",
          phone: "",
          email: "",
          password: "",
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  // Reset Form
  const handleReset = () => {
    setDetails({
      name: "",
      phone: "",
      email: "",
      password: "",
    });
  };

  // Show/Hide Password
  const handlePassword = () => {
    setShowPsw(!showPsw);
  };

  return (
    <div className="main-container">

      <div className="form-box">

        <h1 className="text-center mb-4">
          Registration Form
        </h1>

        <Form onSubmit={handleSubmit}>

          {/* Name + Phone */}
          <Row className="mb-3">

            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>

              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Full Name"
                required
                value={details.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Phone</Form.Label>

              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                pattern="[6-9][0-9]{9}"
                required
                value={details.phone}
                onChange={handleChange}
              />
            </Form.Group>

          </Row>

          {/* Email + Password */}
          <Row className="mb-3">

            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>

              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                value={details.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>

              <div className="d-flex">

                <Form.Control
                  type={showPsw ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  required
                  value={details.password}
                  onChange={handleChange}
                />

                <span
                  onClick={handlePassword}
                  style={{
                    cursor: "pointer",
                    marginLeft: "10px",
                    fontSize: "22px",
                    marginTop: "5px",
                  }}
                >
                  {showPsw ? "🙈" : "👁️"}
                </span>

              </div>
            </Form.Group>

          </Row>

          {/* Login Link */}
          <div className="login-link">
            Already Registered?{" "}
            <Link to="/login">Login</Link>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3">

            <Button
              variant="primary"
              type="submit"
              className="w-100"
            >
              Register
            </Button>

            <Button
              variant="warning"
              type="reset"
              className="w-100"
              onClick={handleReset}
            >
              Cancel
            </Button>

          </div>

        </Form>
      </div>
    </div>
  );
};

export default Register;