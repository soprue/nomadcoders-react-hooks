import { useEffect, useState, useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();

  const toggle = () => {
    const isFullscreen = document.fullscreen;

    if (!isFullscreen) {
      if (element.current) {
        element.current.requestFullscreen();
        if (callback && typeof callback === "function") {
          callback(!isFullscreen);
        }
      }
    } else {
      document.exitFullscreen();
      if (callback && typeof callback === "function") {
        callback(!isFullscreen);
      }
    }
  };

  return { element, toggle };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };

  const { element, toggle } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img
          src="https://picsum.photos/800/500
  "
        />
        <button onClick={toggle}>fullscreen</button>
      </div>
    </div>
  );
};

export default App;
