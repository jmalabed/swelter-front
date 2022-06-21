import "./App.css";
import { useEffect } from "react";
import runOneSignal from "./oneSignalReact";
import Router from "./Router";

import Navigation from "./components/Navigation";

function App() {
  useEffect(() => {
    runOneSignal();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
