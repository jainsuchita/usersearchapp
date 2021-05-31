import React, { useState } from "react";

const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const allChildren = React.Children.map(children, (child) => {
    console.log(child);
    if (typeof child.type !== "function") {
      // not our element May be a DOM element
      return child;
    }

    // if (typeof child.type !== "string") {
    //   // because its a DOM element
    //   throw new Error("DOM element not allowed inside <checkbox/>");
    // }

    if (child.type !== Label && child.type !== CheckboxInput) {
      throw new Error("No custom element allowed");
    }

    const clone = React.cloneElement(child, {
      checked,
      setChecked,
    });
    return clone;
  });

  return allChildren;
};

const CheckboxInput = ({ checked, setChecked }) => {
  const [_checked, _setChecked] = useState(checked);

  return (
    <input
      type="checkbox"
      checked={_checked}
      onChange={(e) => {
        _setChecked(e.target.checked);
        if (setChecked) {
          setChecked(e.target.checked);
        }
      }}
    />
  );
};

const Label = ({ setChecked, children }) => {
  return (
    <label htmlFor="name" onClick={() => setChecked((checked) => !checked)}>
      {children}
    </label>
  );
};

export default function App() {
  return (
    // <CheckboxInput />
    <Checkbox>
      <CheckboxInput />
      <br />
      {/* <p>Hello world</p> */}
      <Label>Checkbox Label</Label>
    </Checkbox>
  );
}
