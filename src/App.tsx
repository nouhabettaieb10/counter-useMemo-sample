import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleExpensiveCalculation = () => counter * counter;
  const memoizedValue = useMemo(handleExpensiveCalculation, [counter]);
  return (
    <div className="App">
      <h2>Counter</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <div>{counter}</div>
      <h3>Expensive Calcultaion</h3>
      {memoizedValue}
    </div>
  );
}

export default App;
