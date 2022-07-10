import "./App.css";
import Router from "./Router";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";

function App() {
  const [buoys, setBuoys] = useState([]);

  const getBuoys = async () => {
    try {
      const allBuoys = await fetch(`http://localhost:9000/buoy`);
      const parsedBuoys = await allBuoys.json();
      setBuoys(parsedBuoys);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBuoys();
  }, []);

  return (
    <div className="App">
      <Navigation buoys={buoys} />
      <Router buoys={buoys} />
    </div>
  );
}

export default App;
