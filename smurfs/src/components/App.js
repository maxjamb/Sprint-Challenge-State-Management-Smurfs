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
import { get } from "https";

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
  // const addSmurf = smurf => {
  //   // add the given item to the cart
  //   setSmurfs([...smurfs, smurf]);
  // };
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );
};

export default App;
