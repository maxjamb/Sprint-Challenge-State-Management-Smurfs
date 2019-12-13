import React, { useEffect } from "react";
import Axios from "axios";

// useffect(() =>{
//   axios.post("http://localhost:3333/smurfs", {name, age, height})
//   .then(response =>{
//   })
// })

function AddSmurf({ formData, updateInput, smurfs }) {
  const addSmurf = formData => {
    return [...smurfs, formData.name, formData.height, formData.age];
  };
  return (
    <div className="smurf-container">
      <div className="smurf-form">
        <h2>Add Smurf</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            addSmurf(formData);
          }}
        >
          <div>
            <input
              required
              placeholder="Name"
              value={formData.name}
              onChange={updateInput}
              name="name"
            />
          </div>
          <div>
            <input
              required
              placeholder="Height"
              value={formData.height}
              onChange={updateInput}
              name="height"
            />
          </div>
          <div>
            <input
              required
              placeholder="Age"
              type="number"
              value={formData.age}
              onChange={updateInput}
              name="age"
            />
          </div>
          <div>
            <button type="submit">Add Smurf</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSmurf;
