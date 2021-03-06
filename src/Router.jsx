import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Subscribe from "./components/Subscribe";
import Buoy from "./components/Buoy";
import BuoyContainer from "./components/BuoyContainer";
import Sub from "./components/Sub";

const Router = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="sub" element={<Sub />} />
      <Route path="buoy" element={<BuoyContainer buoys={props.buoys} />} />
      <Route path="buoy">
        <Route path=":id/subscribe" element={<Subscribe />} />
        <Route path=":id" element={<Buoy />} />
      </Route>
    </Routes>
  );
};

export default Router;
