import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const Buoy = (props) => {
  let { buoy } = props;
  const { id } = useParams();
  const [currBuoy, setCurrBuoy] = useState({});

  const getBuoy = async (buoyId) => {
    try {
      const foundBuoy = await fetch(`http://localhost:9000/buoy/${buoyId}`);
      const parsedBuoy = await foundBuoy.json();
      setCurrBuoy(parsedBuoy);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBuoy(id);
  }, []);

  return (
    <div>
      <div>
        <Link to="/buoy">Back to Buoys</Link>
        <a href={currBuoy.link} target="_blank" rel="noopener noreferrer">
          <h1>{currBuoy.name}</h1>
        </a>
        <p>Buoy Location: {currBuoy.location}</p>
        <p>Desired Wave Period: {currBuoy.desiredDPD}</p>
        <p>Desired Wave Height: {currBuoy.desiredWVHT}</p>
        <p>
          Desired Swell Direction: {currBuoy.desiredMWD?.map((a) => a + " ")}
        </p>
      </div>
      <Link to="subscribe">
        <button>Subscribe</button>
      </Link>
    </div>
  );
};

export default Buoy;
