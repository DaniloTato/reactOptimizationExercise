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

      {/* Only this part depends on state */}
      <label>Count: {count}</label>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      {/* These components DO NOT receive props
         and are wrapped with React.memo,
         so they will NOT re-render when count changes */}
      <TextOne />
      <TextTwo />
      <TextThree />
    </div>
  );
}