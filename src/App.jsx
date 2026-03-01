import CounterSection from "./components/CounterSection";
import ListSection from "./components/ListSection";

export default function App() {
  console.log("Render App");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Rendering Stuff :</h1>
      <CounterSection />
      <hr/>
      <ListSection />
    </div>
  );
}