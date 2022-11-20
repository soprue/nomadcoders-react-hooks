import { useEffect, useRef, useState } from "react";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return typeof onClick !== "function" ? undefined : element;
};

const App = () => {
  // const ref = useRef();
  // setTimeout(() => ref.current?.focus(), 5000);

  const sayHello = () => console.log("say hello");

  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      {/* <input placeholder="la" /> */}
    </div>
  );
};

export default App;
