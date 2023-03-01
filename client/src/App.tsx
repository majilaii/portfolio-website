import {
  ReactEventHandler,
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from "react";
import reactLogo from "./assets/react.svg";
import { InView, useInView } from "react-intersection-observer";
import "./App.css";
import HeroTitle from "./components/HeroTitle";

const list = [1, 2, 3, 4, 5, 6, 7, 8];
function App() {
  console.log("rerender");
  const [mouseDownAt, setMouseDownAt] = useState<number>(0);
  const [prevPercentage, setPrevPercentage] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const imageRef = list.map((x) => useRef<HTMLImageElement>(null));
  const [inView, setInView] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [projectName, setProjectName] = useState<string>("Amazething");

  function mouseDownHandler(e: MouseEvent<HTMLDivElement>) {
    setMouseDownAt(e.clientX);
  }

  function mouseMoveHandler(e: MouseEvent<HTMLDivElement>) {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;

    const nextPercentageUnconstrained = prevPercentage + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    setPercentage(nextPercentage);

    if (galleryRef.current !== null) {
      galleryRef.current.animate(
        {
          transform: `translate(${nextPercentage * 0.9}%,-50%)`,
        },
        { duration: 1500, fill: "forwards", easing: "linear" }
      );
    }

    imageRef.forEach((element) => {
      if (element.current) {
        element.current.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1500, fill: "forwards" }
        );
      }
    });
  }

  function mouseUpHandler(e: MouseEvent<HTMLDivElement>) {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  }

  return (
    <>
      <section
        className="page"
        onMouseDown={mouseDownHandler}
        onMouseMove={mouseMoveHandler}
        onMouseUp={mouseUpHandler}
      >
        <div id="image-track" ref={galleryRef}>
          <InView onChange={setInView} threshold={1}>
            {({ ref, inView }) => <HeroTitle inView={inView} ref={ref} />}
          </InView>
          <img
            className="image"
            ref={imageRef[0]}
            src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
          />
          <img
            className="image"
            ref={imageRef[1]}
            src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            draggable="false"
          />
          <img
            className="image"
            ref={imageRef[2]}
            src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
          />
          <img
            className="image"
            ref={imageRef[3]}
            src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
          />
          <img
            className="image"
            ref={imageRef[4]}
            src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
          />
          <img
            className="image"
            ref={imageRef[5]}
            src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
            draggable="false"
          />
          <img
            className="image"
            ref={imageRef[6]}
            src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
            draggable="false"
          />
          <img
            className="image"
            ref={imageRef[7]}
            src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            draggable="false"
          />
        </div>
      </section>
    </>
  );
}

export default App;
