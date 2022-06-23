import { Link } from "react-router-dom";
import "./style/Navigation.css";
const img = require("../img/Swelter-logos_transparent.png");

const Navigation = (props) => {
  const buoys = props.buoys;

  const buoyList = buoys.map((buoy, idx) => (
    <Link to={`buoy/${buoy._id}`} className="list-spacing">
      {buoy.name}
    </Link>
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
