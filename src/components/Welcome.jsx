const img = require("../img/Swelter-logos_transparent.png");

const Welcome = (props) => {
  return (
    <div>
      <img src={img} alt="buoy" className="logo" />
    </div>
  );
};

export default Welcome;
