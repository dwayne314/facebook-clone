import { createContext, useContext, useEffect, useState } from "react";
import { provider, auth, signInWithRedirect, signOut } from "../firebase";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (err) {
      console.log(err.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return subscriber;
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
