import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import runOneSignal from "../oneSignalReact";

const Subscribe = (props) => {
  const [buoy, setBuoy] = useState({});
  const { id } = useParams();

  const fetchBuoy = async (id) => {
    try {
      const fetchedBuoy = await fetch("http://localhost:9000/buoy/" + id);
      const parsedBuoy = await fetchedBuoy.json();
      setBuoy(parsedBuoy);
    } catch (e) {
      console.log(e);
    }
  };

  // ONESIGNAL API REFERENCE https://documentation.onesignal.com/reference/create-segments
  //Check for segment, if the segment does not exist, them make a new one. If it does, then add the tag to the new user.
  const makeSegment = async () => {
    // not implemented yet
    // add code here...
  };

  useEffect(() => {
    runOneSignal();
  }, []);

  useEffect(() => {
    fetchBuoy(id);
  }, []);

  return (
    <div>
      <h1>Subscribe</h1>
      <p>Sign up for push notifications for {buoy.name} on browser pop up.</p>
      <p>Make sure that you have your pop-ups enabled!</p>
    </div>
  );
};

export default Subscribe;
