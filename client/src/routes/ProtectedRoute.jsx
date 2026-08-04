import { useContext } from "react";
import { AppContent } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedin } = useContext(AppContent);

  if (!isLoggedin) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
