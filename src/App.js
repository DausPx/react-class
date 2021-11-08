
import "./App.css";
import {Routes, Route} from 'react-router-dom'
import RouterProps from "./functionalComponents/RouterProps";
import SearchNews from "./functionalComponents/SearchNews";


function App() {
  return <>
      <div>nav bar</div>
      <Routes>
        <Route path="/" element={<p>home</p>} />
        <Route path="search" element={<SearchNews />} />
        <Route path="multiple" element={<p>about</p>} />
        <Route path="prop/:id" element={<RouterProps />} />
        <Route path="prop/:id/nesto" element={<> nesto 2<RouterProps /></>} />

        <Route path="*" element={<p>error</p>} />
      </Routes>
  </>
}

export default App;
