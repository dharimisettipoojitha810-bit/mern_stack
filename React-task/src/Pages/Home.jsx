import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-container">

      <div className="home-box">

        <h1 className="home-title">
          Welcome to Home Page 👋
        </h1>

        <p className="home-text">
          Your registration and login system is working successfully.
        </p>

        <div className="home-buttons">

          <button
            className="btn btn-primary"
            onClick={() => navigate("/")}
          >
            Register
          </button>

          <button
            className="btn btn-dark"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </div>

      </div>
    </div>
  );
}