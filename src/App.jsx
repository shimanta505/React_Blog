import {useState} from "react"
import Navigation from "./navigation/Nav.jsx"
import Products from './products/Products.jsx'
import Recomended from "./recomended/Recomended.jsx";
import "./index.css"

const App = () => {
  
  return (
    <div>
      <Navigation/>
      <Products/>
      <Recomended/>
    
    </div>
  );
};

export default App;