import "./styles.css";
import Board from "./Board";

export default function App() {
  return (
    <div className="App">
      {/* <Board n={5} /> */}
      <Board n={4} />
      <Board n={3} />
    </div>
  );
}
