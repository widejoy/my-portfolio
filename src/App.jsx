import Home from "./Home"

import { Routes, Route, Outlet, Link } from "react-router-dom";



function App() {

  return(<div>
  <Routes>
  <Route path="/" element={<Home/>}/>
  


  </Routes>
</div>)
}

export default App
