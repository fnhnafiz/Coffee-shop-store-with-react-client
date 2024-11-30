import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../Firebase/firebase.init";

export const AuthContextProvider = createContext(null);

const AuthProviderContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const registerNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    user,
    loading,
    setUser,
    registerNewUser,
    loginUser,
  };
  return (
    <AuthContextProvider.Provider value={userInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProviderContext;
