import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const userRole = localStorage.getItem("role");

  if (!userRole) return <Navigate to="/auth" />;
  if (userRole !== role) return <Navigate to="/auth" />;

  return children;
}

export default ProtectedRoute;