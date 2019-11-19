import React from "react";
import "./App.css";
import CardDisplay from "./components/CardDisplay";

function App() {
  return (
    <div className="App">
      <h1>Random NASA Photo of the Day</h1>
      <hr></hr>
      <CardDisplay />
    </div>
  );
}

export default App;
