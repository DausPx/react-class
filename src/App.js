
import { useContext } from "react";
import "./App.css";
import { AppContext } from "./functionalComponents/Context";
import Row from "./functionalComponents/Row";
import Simple from "./functionalComponents/Simple";

function App() {
  return <>
      <Row justify='flex-start'>
        <Simple />
      </Row>
  </>
}

export default App;
