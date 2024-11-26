import { useState } from "react";

function Counter() {
  const [state, setState] = useState(0);
  const increment = () => {
    setState((num) => num + 1);
  };
  increment();
  return (document.getElementById("count").innerHTML = state);
}
Counter();
