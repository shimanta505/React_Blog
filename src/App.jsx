import { useState } from "react";
import RatingStar from "./components/rating-star";
//import "./App.css";

const App = () => {

  return (
    <div>
      <RatingStar noOfStars={10}/>
    </div>
  );
};

export default App;