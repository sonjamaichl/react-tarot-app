import React, { useEffect, useState } from "react";
import { app, auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser (user));
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

