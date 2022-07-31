import React, { useEffect, useState } from "react";
import userService from "../services/userService";

export const authContext = React.createContext(null);
authContext.displayName = "Auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userService.getUser());

  const refreshUser = () => {
    setUser(userService.getUser());
  };
  const createUser = (user) => {
    return userService.createUser(user);
  };
  const login = async (Credentials) => {
    const response = await userService.loginUser(Credentials);
    refreshUser();
    return response;
  };

  const logout = () => {
    userService.logout();
    refreshUser();
  };

  return (
    <authContext.Provider value={{ user, login, logout, createUser }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(authContext);
};
