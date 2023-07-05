// MyProvider.js
import React from "react";
import { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const contextValue = {
    loggedIn,
    setLoggedIn,
  };
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
