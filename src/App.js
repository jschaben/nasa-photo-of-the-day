import React from "react";
import "./App.css";
import CardDisplay from "./components/CardDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "reactstrap";

function App() {

  

  return (
    <div className="App">
      <h1>Random NASA Photo of the Day</h1>
      <hr></hr>
      <CardDisplay limit = {1}/>
    </div>
  );
}

export default App;
