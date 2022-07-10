import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        Swelter adds push notifications to buoys! Check our{" "}
        <Link to="buoy">tracked buoys</Link> in the navigation bar, and opt in
        for notifications if you are interested.
      </p>
    </div>
  );
};

export default Welcome;
