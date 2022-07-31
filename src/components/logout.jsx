import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const LogOut = ({ redirect }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    redirect && navigate(redirect);
  }, []);

  return null;
};

export default LogOut;
