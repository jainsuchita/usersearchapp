import React, { useContext } from "react";
import { StateContext } from "./App2";

function HeaderContext() {
  const context = useContext(StateContext);

  return (
    <header>
      <h1>Hello {context.name}</h1>
    </header>
  );
}

export default HeaderContext;
