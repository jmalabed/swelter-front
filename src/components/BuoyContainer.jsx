import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const BuoyContainer = (props) => {
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

  const buoyList = buoys.map((buoy, idx) => (
    <Link to={buoy._id} className="list-spacing">
      {buoy.name}
    </Link>
  ));

  return (
    <div>
      <h1>Buoy Container</h1>
      <div className="d-flex flex-column">{buoyList}</div>
    </div>
  );
};

export default BuoyContainer;
