"use client"
import { useState } from "react"


const Counter = () => {
  const [counter, setCounter] = useState(0)
  console.log("CLIENT COMPONENT (browser)");

  const handelClicked = () => {
    (setCounter(counter +1))
  }
  return <button onClick={handelClicked}>Clicked:</button>;
}

export default Counter
