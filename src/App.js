import "./App.css";
import { useEffect } from "react";
import runOneSignal from "./oneSignalReact";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Subscribe from "./components/Subscribe";

function App() {
  useEffect(() => {
    runOneSignal();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Welcome />} />
        <Route path="sub" element={<Subscribe />} />
      </Routes>
    </div>
  );
}

export default App;
