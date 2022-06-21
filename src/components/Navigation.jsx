import "./Navigation.css";
const img = require("../img/Swelter-logos_transparent.png");

const Navigation = (props) => {
  const buoys = [
    {
      name: "Harvest",
      location: `34.452 N 120.780 W (34°27'6" N 120°46'47" W)`,
      link: "https://www.ndbc.noaa.gov/station_page.php?station=46218",
      desiredDPD: "15",
      desiredWVHT: "4",
      desiredMWD: ["S", "SW", "SSW"],
      path: "/buoy/1",
    },
    {
      name: "Point Santa Cruz",
      location: `336.934 N 122.034 W (36°56'4" N 122°2'2" W)`,
      link: "https://www.ndbc.noaa.gov/station_page.php?station=46269",
      desiredDPD: "15",
      desiredWVHT: "4",
      desiredMWD: ["S", "SW", "SSW"],
      path: "/buoy/2",
    },
  ];

  const buoyList = buoys.map((buoy, idx) => (
    <li className="list-spacing">
      <a href={buoy.path}>{buoy.name}</a>
    </li>
  ));

  return (
    <div className="d-flex">
      <a href="/">
        <img src={img} alt="buoy" className="logo" />
      </a>
      <ul className="d-flex">{buoyList}</ul>
    </div>
  );
};

export default Navigation;
