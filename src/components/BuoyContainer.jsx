import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Buoy from "./Buoy.jsx";

const BuoyContainer = (props) => {
  const { buoys } = props;

  const buoyList = buoys.map((buoy, idx) => (
    <Link to={buoy._id} className="list-spacing">
      {buoy.name}
    </Link>
  ));

  return (
    <div>
      <h1>Buoy List</h1>
      <div className="d-flex flex-column">{buoyList}</div>
    </div>
  );
};

export default BuoyContainer;
