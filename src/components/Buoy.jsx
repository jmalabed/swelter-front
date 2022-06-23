import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
const Buoy = (props) => {
  const [buoy, setBuoy] = useState(null);

  const id = useParams("id");

  const getBuoy = async (id) => {
    try {
      const buoy = await fetch(`http://localhost:9000/buoy/${id}`);
      const parsedBuoy = await buoy.json();
      setBuoy(parsedBuoy);
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
        <h1>Buoy Data</h1>
        {buoy !== null && (
          <>
            <Link to={buoy._id}>
              <p>{buoy.name}</p>
            </Link>
            <p>Buoy Location: {buoy.location}</p>
            <p>Desired Wave Period: {buoy.desiredDPD}</p>
            <p>Desired Wave Height: {buoy.desiredWVHT}</p>
            <p>
              Desired Swell Direction: {buoy.desiredMWD?.map((a) => a + " ")}
            </p>
          </>
        )}
      </div>
      <Link to="subscribe">
        <button>Subscribe</button>
      </Link>
    </div>
  );
};

export default Buoy;
