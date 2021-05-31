import React, { createContext, useContext, useState } from "react";

const CheckboxContext = createContext(null);

const Checkbox = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <CheckboxContext.Provider value={{ state, setState }}>
      {children}
    </CheckboxContext.Provider>
  );
};

const CheckboxInput = () => {
  const { state, setState } = useContext(CheckboxContext);
  return (
    <input
      type="checkbox"
      checked={state}
      onChange={(e) => {
        setState(e.target.checked);
      }}
    />
  );
};

const Label = ({ children }) => {
  const { setState } = useContext(CheckboxContext);
  return (
    <label htmlFor="name" onClick={() => setState((checked) => !checked)}>
      {children}
    </label>
  );
};

export default function App() {
  return (
    <Checkbox>
      <CheckboxInput />
      <div>
        <Label>Checkbox Label</Label>
      </div>
    </Checkbox>
  );
}
