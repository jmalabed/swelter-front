import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Subscribe from "./components/Subscribe";
import Buoy from "./components/Buoy";

const Router = (props) => {
  return (
    <Routes>
      <Route path="" element={<Welcome />} />
      <Route path="sub" element={<Subscribe />} />
      <Route path="buoy/:id" element={<Buoy />} />
    </Routes>
  );
};

export default Router;
