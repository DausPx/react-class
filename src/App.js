import { useState } from "react";
import "./App.css";
import InputUp from "./functionalComponents/InputUp";

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="App">
      <InputUp className='my' defaultValue={inputValue} onChange={(e)=> {
        setInputValue(e.target.value)
        console.log(e.target.value)}} style={{minWidth: 200, color: 'blue'}} />
    </div>
  );
}

export default App;
