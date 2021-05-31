import React, { useContext } from "react";
import { StateContext } from "./App2";

function RightSidebar() {
  const context = useContext(StateContext);

  return (
    <article>
      <p>The mode is :{context.theme}</p>
      <button
        onClick={() =>
          context.changeTheme(context.theme === "dark" ? "light" : "dark")
        }
      >
        click here to turn {context.theme === "dark" ? "light" : "dark"} mode
      </button>
    </article>
  );
}

export default RightSidebar;
