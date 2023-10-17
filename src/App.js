import logo from './logo.svg';
import { useState } from "react";
import './App.css';


function App() {
  const [color, setColor] = useState("red");
  
  return (
    <>
    <div className="App">
      
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    
    </div>
    </>
  );
}

export default App;
