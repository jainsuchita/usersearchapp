import React, { useState } from "react";

const Checkbox = ({ children }) => {
  return <div>{children}</div>;
};

const CheckboxInput = ({ checked, onToggle }) => {
  return <input type="checkbox" checked={checked} onChange={onToggle} />;
};

const Label = ({ onToggle, children }) => {
  return (
    <label htmlFor="name" onClick={onToggle}>
      {children}
    </label>
  );
};

export default function App() {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked((checked) => !checked);
  };
  return (
    <Checkbox>
      <CheckboxInput checked={checked} onToggle={handleToggle} />
      <Label onToggle={handleToggle}>Checkbox Label</Label>
    </Checkbox>
  );
}
