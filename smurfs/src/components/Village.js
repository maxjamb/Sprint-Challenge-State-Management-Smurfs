import React from "react";
import Smurf from "./Smurf";

function Village({ smurfs }) {
  console.log(smurfs);
  return (
    <div>
      <div className="list">
        {smurfs.map(smurf => {
          return <Smurf smurf={smurf} />;
        })}
      </div>
    </div>
  );
}

export default Village;
