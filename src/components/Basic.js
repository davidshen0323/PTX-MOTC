import React, { useRef, useEffect, useState } from "react";
import "./Basic.css";

function Basic() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(30);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    console.log(isVisible);
    setIsVisible(entry.isIntersecting);
    if(isVisible === 'true'){
      setCount(count+30);
    }
    console.log(count);
    

  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };


  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);


  return (
    <div className="app">
      {/* <div className="isVisible">{isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}</div> */}
      {/* <div className="section">{count}</div> */}
      <div className="box" ref={containerRef}></div>
    </div>
  );
}

export default Basic;
