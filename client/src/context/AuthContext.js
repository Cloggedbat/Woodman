import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(' ');

  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:3000/auth/login");
    // const loggedInRes = await axios.get(
    //   "https://mern-auth-template-tutorial.herokuapp.com/auth/loggedIn"
    // );
    setLoggedIn(loggedInRes.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
