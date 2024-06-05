import { useState } from "preact/hooks";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { NumberSignal } from "../siganls.ts";

const Button: FunctionComponent = () => {
  const [number, setNumber] = useState<number>(0);
  function Addnumber() {
    setNumber(number + 1);
    NumberSignal.value++;
  }
  return (
    <div className="ButtonIslandContainer">
      <button className="ButtonIsland" onClick={Addnumber}>Click Me</button>
      <div>Number State:</div> {number}
    </div>
  );
};
export default Button;
