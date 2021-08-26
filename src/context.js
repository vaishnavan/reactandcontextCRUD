import React, { createContext, useState } from "react";

export const mycontext = createContext();

export default function DataProvider({ children }) {
  const [userData, setUserData] = useState([
    {
      id: "1",
      username: "sakthi",
      desc: "let begin"
    },
    {
      id: "2",
      username: "Ram",
      desc: "let begin"
    }
  ]);

  return (
    <>
      <mycontext.Provider value={{ userData, setUserData }}>
        {children}
      </mycontext.Provider>
    </>
  );
}
