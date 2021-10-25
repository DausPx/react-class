import { useState, createContext } from "react";
import "./App.css";
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
    <div className="App">
      <Simple />
    </div>
    </AppContext.Provider>
  </>
}

export default App;
