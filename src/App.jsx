import Home from "./Home"
import { useEffect } from 'react';

import { Routes, Route, Outlet, Link } from "react-router-dom";



function App() {
  useEffect(() => {
    document.title = 'Roger Portfolio';
    
  }, []);


  return(<div>
  <Routes>
  <Route path="/" element={<Home/>}/>
  


  </Routes>
</div>)
}

export default App
