
import "./App.css";
import {Routes, Route} from 'react-router-dom'


function App() {
  return <>
      <div>nav bar</div>
      <Routes>
        <Route path="/" element={<p>home</p>} />
        <Route path="multiple" element={<p>about</p>} />
        <Route path="*" element={<p>error</p>} />
      </Routes>
  </>
}

export default App;
