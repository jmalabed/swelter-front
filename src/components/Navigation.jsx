import { Link } from "react-router-dom";
import "./style/Navigation.css";
import { v4 as uuidv4 } from "uuid";
const img = require("../img/Swelter-logos_transparent.png");

const Navigation = (props) => {
  const buoys = props.buoys;

  const buoyList = buoys.map((buoy, idx) => (
    <a href={`/buoy/${buoy._id}`} className="list-spacing" key={uuidv4()}>
      {buoy.name}
    </a>
  ));

  return (
    <div className="d-flex align-items-center">
      <Link to="/">
        <img src={img} alt="buoy" className="logo" />
      </Link>
      <div className="d-flex">{buoyList}</div>
    </div>
  );
};

export default Navigation;
