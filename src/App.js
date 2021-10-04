import "./App.css";
import Welcome from "./Welcome";

function App() {
  const data = ["Suad", "Arijan", "Ivan"]

  return (
    <div className="App">
      {data.map((value, index)=>{
        return <Welcome name={value} key={index} />
      })}
    </div>
  );
}

export default App;
