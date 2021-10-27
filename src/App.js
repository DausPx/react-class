import { useState, createContext } from "react";
import "./App.css";
import Row from "./functionalComponents/Row";
import Simple from "./functionalComponents/Simple";
import { getThemeFromLocalStorage } from "./util";

export const AppContext = createContext({
  theme: 'dark'
})

function App() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage() ?? 'light')

  return <>
    <AppContext.Provider value={{
      theme, setTheme
    }}>
      <Row justify='flex-start'>
        <Simple />
      </Row>
    </AppContext.Provider>
  </>
}

export default App;
