import { useEffect } from "react";
import runOneSignal from "../oneSignalReact";

const Sub = (props) => {
  useEffect(() => {
    runOneSignal();
  }, []);

  return (
    <div>
      <h1>Sub</h1>
    </div>
  );
};

export default Sub;
