import React, {
  Component,
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect
} from "react";
import axios from "axios";
import "./App.css";

import Village from "./Village";
import AddSmurf from "./AddSmurf";

const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response);
        setSmurfs(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:3333/smurfs", smurfs)
      .then(response => {
        console.log(response.data);
      })
      .catch(console.log);
  });

  // const addSmurf = smurf => {
  //   setSmurfs([...smurfs, smurf]);
  // };

  return (
    <div className="App">
      return (
      <div>
        <AddSmurf smurfs={smurfs} />
        <Village smurfs={smurfs} />
      </div>
      );
    </div>
  );
};

export default App;
