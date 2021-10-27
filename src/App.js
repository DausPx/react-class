
import { useContext } from "react";
import "./App.css";
import { AppContext } from "./functionalComponents/Context";
import Row from "./functionalComponents/Row";
import Simple from "./functionalComponents/Simple";

function App() {
  const {test, setTest} = useContext(AppContext)
  return <>
      <Row justify='flex-start'>
        <Simple />
        <p>{test}</p>
      </Row>
  </>
}

export default App;
