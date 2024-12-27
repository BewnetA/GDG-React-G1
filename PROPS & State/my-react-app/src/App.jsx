import { useState } from "react";
import "./App.css"; // Import custom CSS
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increment = () => {
    setCount(count + 1);
    setMessage("");
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setMessage("Count can't go below 0!");
    }
  };

  const reset = () => {
    setCount(0);
    setMessage("Counter reset!");
  };

  return (
    <>
      <Card
        name="Bewnet"
        email="bewnetaddisalem@gmail.com"
        age={20}
        color="#48c9b0"
      />
      <div className="container">
        <h1>React Counter</h1>
        <p className="msg">{message}</p>
        <p className="value">Count: {count}</p>
        <div className="button-group">
          <button className="btn" onClick={increment}>
            +
          </button>
          <button className="btn" onClick={decrement}>
            -
          </button>
          <button className="btn reset-btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
