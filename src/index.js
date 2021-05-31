import React from "react";
import ReactDOM from "react-dom";
// import HomePage from "./components/HomePage";
// import App from "./App";
// import AppContext from "./context/App2";
// import App from "./useReducer/App";
// import ShoppingList from "./useReducer/ShoppingList";
import App from "./compundComponents/App";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
