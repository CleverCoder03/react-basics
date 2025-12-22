import {useCounterStore} from "../store/useCounterStore";
import "./App.css";

function App() {
  const {count, increase, decrease, reset} = useCounterStore()
  return (
    <>
      <h1>Counter</h1>
      <div>
        <button onClick={decrease}>-</button>
        <p>{count}</p>
        <button onClick={increase}>+</button>
      </div>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;
