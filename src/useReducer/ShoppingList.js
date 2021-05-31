import React, { useReducer, useRef } from "react";

export default function ShoppingList() {
  const inputRef = useRef();

  // reducer
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            name: action.payload,
            id: state.length,
          },
        ];

      case "remove":
        return state.filter((_, ind) => {
          return ind !== action.payload;
        });
      case "clear":
        return [];

      default:
        return state;
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value) {
      dispatch({ type: "add", payload: value });
    }
    inputRef.current.value = "";
  }

  function handleRemove(index) {
    dispatch({ type: "remove", payload: index });
  }

  function handleClearList() {
    debugger;
    dispatch({ type: "clear" });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input style={{ border: "1px solid" }} ref={inputRef} />
      </form>

      <button onClick={handleClearList}>Clear List</button>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {item.name}
              <button onClick={() => handleRemove(index)}>X</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
