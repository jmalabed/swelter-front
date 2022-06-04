import "./App.css";
import { useEffect } from "react";
import runOneSignal from "./oneSignal";

function App() {
  useEffect(() => {
    runOneSignal();
  });

  return (
    <div className="App">
      <h1>Swelter</h1>
      <img
        src="https://cdn-icons-png.flaticon.com/512/879/879247.png"
        alt="buoy"
      />
    </div>
  );
}

export default App;
