import {useState} from "react"
import Weather from "./Weather"

const App = () => {
  
  return (
    <div>
      <h1>App Component</h1>
      <Weather tempareture={26}></Weather>
    </div>
  );
};

export default App;