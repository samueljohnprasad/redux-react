import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  console.log("state", state);
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INC", payload: 1 })}>
        plus
      </button>
      <button onClick={() => dispatch({ type: "DEC", payload: -1 })}>
        minus
      </button>
    </div>
  );
}

export default App;
