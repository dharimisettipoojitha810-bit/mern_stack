import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [loginDetails, setLoginDetails] = React.useState({
    username: "",
    password: "",
    otp: "",
  });

  const navigate = useNavigate();
  let [mailOtp, setMailOtp] = useState(0);

  //function to fetch input values
  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  // form reset function
  const handleReset = () => {
    setLoginDetails({
      username: "",
      password: "",
      otp: "",
    });
  };

  //function to generate otp and send to mail
  const generateOtp = async () => {
    try {
      let generatedOtp = Math.floor(Math.random() * 1000000);
      let time = new Date();
      let expiredTime = `${time.getHours()}:${time.getMinutes() + 15}:00`;
      setMailOtp(generatedOtp);

      let formData = {
        email: loginDetails.username,
        otp: generatedOtp,
        time: expiredTime,
      };
      await emailjs.send("service_9l1dihp", "template_7bth6c8", formData, {
        publicKey: "N3xga7GAtw352Ac-q",
      });

      toast.success("otp send to ur mail successfully");
    } catch (err) {
      console.log(err);
      toast.error("failed to generate otp");
    }
  };

  //function to handle form submit
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      // if (
      //   mailOtp != "" &&
      //   mailOtp == loginDetails.otp &&
      //   loginDetails.password != ""
      // ) {
      const response = await axios.post("http://localhost:5000/user/login", {
        username: loginDetails.username,
        password: loginDetails.password,
      });
      toast.success("login successful");

      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        navigate("/home");
      }, 3000);
      // } else if (mailOtp != loginDetails.otp) {
      // toast.warn("invalid otp");
      // } else {
      // toast.error("failed to login");
      // }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="form-container">
      <Form onSubmit={handleLogin}>
        <Row>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="username"
              onChange={handleChange}
              value={loginDetails.username}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group>
            <Form.Label>Password :</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={loginDetails.password}
            />
          </Form.Group>
        </Row>
        <Row className="my-2">
          <Col>
            <Button
              type="button"
              onClick={generateOtp}
              className="btn btn-info"
            >
              Generate OTP
            </Button>
          </Col>
          <Col>
            <Form.Control
              type="number"
              name="otp"
              placeholder="enter otp"
              onChange={handleChange}
              value={loginDetails.otp}
            />
          </Col>
        </Row>
        {/* button  row  */}
        <Row className="my-2">
          <Col>
            <Button type="submit">SignIn</Button>
          </Col>
          <Col>
            <Button
              onClick={handleReset}
              type="reset"
              className="btn btn-warning"
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Form>

      <ToastContainer />
    </div>
  );
};

export default Login;