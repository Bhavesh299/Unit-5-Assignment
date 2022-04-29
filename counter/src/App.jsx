import "./App.css";
import { Inventory } from "./components/Inventory";

function App() {
  return (
    <div className="App">
      <Inventory initial={0} />
    </div>
  );
}

export default App;
