import { useEffect, useRef } from "react";

const useFadeIn = (duration = 3) => {
  const element = useRef();

  useEffect(() => {
    if (typeof duration !== "number") {
      return;
    }

    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1);
  const fadeInP = useFadeIn(5);

  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalalala</p>
    </div>
  );
};

export default App;
