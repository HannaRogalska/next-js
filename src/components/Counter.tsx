"use client";
import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("/api/count")
      .then((res) => res.json())
      .then((data) => setCounter(data.count));
  }, []);

  const handelClicked = () => {
    setCounter(counter + 1);
  };
  console.log(counter);
  return <button onClick={handelClicked}>Clicked:</button>;
};

export default Counter;
