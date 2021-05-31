import React, { createContext, useState } from "react";
import Header from "./HeaderContext";
import RightSidebar from "./RightSidebar";

const StateContext = createContext({});

export { StateContext };

function App2() {
  const [theme, setTheme] = useState("light");

  return (
    <StateContext.Provider
      value={{
        theme,
        changeTheme: function (value) {
          document.body.classList.remove("dark", "light");
          document.body.classList.add(value);
          setTheme(value);
        },
        name: "suchita",
        get Logo() {
          return this.theme === "dark" ? "white-logo" : "red-logo";
        },
      }}
    >
      <Header />
      <RightSidebar />
    </StateContext.Provider>
  );
}

export default App2;
