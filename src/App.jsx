import { useState } from "react";
import RatingStar from "./components/rating-star";
import ImageSlider from "./components/image-slider/ImageSlider";
//import "./App.css";

const App = () => {

  return (
    <div>
      <ImageSlider url="https://picsum.photos/v2/list" limit={5} page={1}/>
    </div>
  );
};

export default App;