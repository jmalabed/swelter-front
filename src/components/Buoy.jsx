const Buoy = (props) => {
  const buoy = { props };
  const sb = {
    name: "Harvest",
    location: `34.452 N 120.780 W (34°27'6" N 120°46'47" W)`,
    link: "https://www.ndbc.noaa.gov/station_page.php?station=46218",
    desiredDPD: "15",
    desiredWVHT: "4",
    desiredMWD: ["S", "SW", "SSW"],
  };

  return (
    <div>
      <h1>Buoy Data</h1>
      <a href={sb.link}>
        <p>{sb.name}</p>
      </a>
      <p>{sb.location}</p>
      <p>Desired Wave Period: {sb.desiredDPD}</p>
      <p>Desired Wave Height: {sb.desiredWVHT}</p>
      <p>Desired Swell Direction: {sb.desiredMWD.map((a) => a + " ")}</p>
    </div>
  );
};

export default Buoy;
