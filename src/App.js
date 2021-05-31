import React, { useEffect, useRef, useState } from "react";

function Child() {
  console.log("\t\t\t>Child rendered");

  useEffect(() => {
    console.log("\t\t\t>Child Updated");
    return () => {
      console.log("\t\t\t>Child Cleaned up ");
    };
  });

  const ChildComp = <h1>I am a Child</h1>;
  console.log("\t\t\t>Child rendering ended");
  return ChildComp;
}

function App2() {
  console.log("App rendered");

  const [counter, setCounter] = useState(() => {
    console.log("> lazy init 1");
    return 0;
  });
  const [show, setShow] = useState(() => {
    console.log("> lazy init 2 ");
    return false;
  });

  useEffect(() => {
    console.log("counter updated");

    setShow((show) => !show);

    return () => {
      console.log("Cleaning effect of Counter ", counter);
    };
  }, [counter]);

  const AppComp = (
    <>
      <h1 onClick={() => setCounter((counter) => counter + 1)}>
        Counter 1 : {counter}
      </h1>
      <br />

      {show && <Child />}
    </>
  );

  console.log("App rendering ended");

  return AppComp;
}

function App() {
  const [counter, setCounter] = useState(0);
  const obj = useRef(100);
  //   const obj = { current: 100 };

  useEffect(() => {
    console.log("updated");
  }, [obj]);

  useEffect(() => {
    obj.current *= 5;
    console.log("obj value after counter is updated ", obj);
  }, [counter]);

  return (
    <h1 onClick={() => setCounter((val) => val + 1)}>
      Hello World : {counter}
    </h1>
  );
}

export default App;
