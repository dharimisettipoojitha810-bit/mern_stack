/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, authenticated }) => {
  const navigate = useNavigate();
  if (authenticated==""||authenticated==null) {
    useEffect(() => {
      navigate("/login")
    }, []);
  }
  return children;
};

export default ProtectedRoute;