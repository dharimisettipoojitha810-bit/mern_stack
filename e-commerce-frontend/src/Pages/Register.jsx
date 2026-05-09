import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { toast, ToastContainer } from "react-toastify";

function Register() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    userType: "user",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    toast.success("register successfully 😊");
  };

  return (
    <div id="form-container">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={handleChange}
              required
              placeholder="Enter Full Name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              pattern="[6-9]{1}[0-9]{9}"
              placeholder="+91"
              required
              onChange={handleChange}
              name="phone"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              type="email"
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridUserType">
            <Form.Label>User Type</Form.Label>
            <Form.Select name="userType" onChange={handleChange}>
              <option>Choose User Type</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Create Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="password"
              type="password"
              required
              placeholder="Password"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="address"
            required
            placeholder="1234 Main St"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={handleChange} name="city" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              onChange={handleChange}
              name="state"
              required
              defaultValue="Choose..."
            >
              <option>Choose State</option>
              <option value="Andhra pradesh">AP</option>
              <option value="Karnataka">KA</option>
              <option value="Telangana">TL</option>
              <option value="tamil nadu">TN</option>
              <option value="madhyapradesh">MP</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control onChange={handleChange} name="zipCode" required />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Form.Group className="mb-3">
          <span>
            If You Already Have Register Click here to{" "}
            <a href="/login">login</a>
          </span>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Register;