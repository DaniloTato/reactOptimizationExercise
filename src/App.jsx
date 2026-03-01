import CounterSection from "./components/CounterSection";
import ListSection from "./components/ListSection";

export default function App() {
  console.log("Render App");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Render Optimization Demo</h1>

      {/* SECTION 1 */}
      <CounterSection />

      <hr />

      {/* SECTION 2 */}
      <ListSection />
    </div>
  );
}