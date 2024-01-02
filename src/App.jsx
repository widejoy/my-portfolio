import Resume from "./resume"
import Home from "./Home"

import { Routes, Route, Outlet, Link } from "react-router-dom";



function App() {

  return(<div>
  <Routes>
  <Route path="/" element={<Home/>}/>
  
  <Route path="/resume" element={<Resume/>}/>


  </Routes>
</div>)
}

export default App
