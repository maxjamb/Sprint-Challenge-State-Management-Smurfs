import React from "react";

function Smurf({ smurf }) {
  return (
    <div className="content">
      <h3>Name: {smurf.name}</h3>
      <h3>Age: {smurf.age}</h3>
      <h3>Height: {smurf.height}</h3>
    </div>
  );
}

export default Smurf;
