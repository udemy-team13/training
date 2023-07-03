import "./App.css";
import Counter from "./components/countReducer";
import Todo from "./components/todoReducer";

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
