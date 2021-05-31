import React, { useReducer } from "react";

// state
const people = [
  { name: "Jay", alive: true },
  { name: "Kailee", alive: true },
  { name: "John", alive: true },
  { name: "Mia", alive: true },
];

// reducer
const reducer = (state = people, action) => {
  let newState = [...state];
  switch (action.type) {
    case "chomp":
      newState = newState.map((person) => {
        if (person.name === action.payload) {
          person.alive = false;
        }
        return person;
      });

      return newState;

    case "revive":
      newState = newState.map((person) => {
        if (person.name === action.payload) {
          person.alive = true;
        }
        return person;
      });

      return newState;

    default:
      return newState;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, people);

  function devour(payload) {
    dispatch({ type: "chomp", payload });
  }

  function spitOut(payload) {
    dispatch({ type: "revive", payload });
  }

  return (
    <div>
      {state.map((person, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            width: "50%",
            justifyContent: "space-around",
          }}
        >
          <div>{person.name}</div>
          {person.alive ? (
            <div>
              {" "}
              ✨✨ ALIVE! ✨✨{" "}
              <button onClick={() => devour(person.name)}>
                {" "}
                🐊 DEVOUR 🐊{" "}
              </button>{" "}
            </div>
          ) : (
            <div>
              {" "}
              ☠ ☠ DEAD ☠ ☠{" "}
              <button onClick={() => spitOut(person.name)}>
                {" "}
                🥵 SPIT OUT 🥵{" "}
              </button>{" "}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default App;
