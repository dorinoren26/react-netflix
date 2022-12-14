import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

const ProtectedRoute = ({ children, bizOnly = false }) => {
  const { user } = useAuth();
  if (!user || (bizOnly && !user.biz)) {
    return <Navigate to="/log-in" />;
  }
  return children;
};

export default ProtectedRoute;
