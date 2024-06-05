import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { NumberSignal } from "../siganls.ts";

const Numerajo: FunctionComponent = () => {
  useEffect(() => {
    console.log(NumberSignal.value);
  }, [NumberSignal.value]);
  return (
    <div className="ButtonIslandContainer">
      <h1>Number Signal</h1>
      <div className="numerajo">
        {NumberSignal.value}
      </div>
      {NumberSignal}
    </div>
  );
};
export default Numerajo;
