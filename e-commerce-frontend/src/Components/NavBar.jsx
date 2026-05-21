
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { CartContext } from "../service/CartProvider";

function NavBar() {
  const { items, isLogin, setIsLogin } = useContext(CartContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  return (
    <div
      id="navbar-container"
      style={{ position: "sticky", top: "0px", zIndex: "3" }}
    >
      <Navbar expand="lg" id="nav-container">
        <Container>
          <Navbar.Brand>
            <Link id="brand-name" to="/">
              Alpha Mart
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link to="/home"> Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/register">Register</Link>
              </Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/products">View Products</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="">Edit Products</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/cart">Cart Products</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="">Delete Product</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/view-users">View Users</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <button
          id="login-btn"
          className="btn btn-primary"
          onClick={handleLogout}
        >
          <Link to={isLogin ? "/login" : "/home"}>
            {isLogin ? "LogIn" : "LogOut"}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
            />
            <path
              fill-rule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
        </button>
        <button id="cart-btn">
          <Link to="/cart">Cart {items.length}</Link>
        </button>
      </Navbar>
    </div>
  );
}

export default NavBar;