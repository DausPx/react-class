import "./App.css";
import Clock from "./classComponents/Clock";
import RandomEmoji from "./classComponents/RandomEmoji";
import {default as ClockF} from "./functionalComponents/Clock";

function App() {

  return (
    <div className="App">
      <Clock/>
      <RandomEmoji/>
      <ClockF />
    </div>
  );
}

export default App;
