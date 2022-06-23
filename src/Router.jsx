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
      <Route path="sub" element={<Subscribe />} />
      <Route path="buoy" element={<BuoyContainer />} />
      <Route path="buoy">
        <Route path="subscribe" element={<Sub />} />
        <Route path=":id" element={<Buoy />} />
      </Route>
    </Routes>
  );
};

export default Router;
