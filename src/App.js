import "./App.css";
import Parent from "./exercise/Parent-Child/Parent";
import ThemeByRedux from "./exercise/ThemeByRedux";

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: "100px" }}>
        <ThemeByRedux></ThemeByRedux>
      </div>
      <div>
        <Parent></Parent>
      </div>
    </div>
  );
}

export default App;
