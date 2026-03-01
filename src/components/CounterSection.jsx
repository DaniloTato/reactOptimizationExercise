import { useState } from "react";
import TextOne from "./TextOne";
import TextTwo from "./TextTwo";
import TextThree from "./TextThree";

export default function CounterSection() {
  console.log("Render CounterSection");

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter Section</h2>

      {/* This will need to re-render */}
      <label>Count: {count}</label>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      {/* wrapped with React.memo and do not receive props,
         so they will never re-render */}
      <TextOne />
      <TextTwo />
      <TextThree />
    </div>
  );
}