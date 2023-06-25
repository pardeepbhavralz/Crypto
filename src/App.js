import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './Pages/Home'; 
import Products from './Pages/Products';

import Learn from './Pages/Learn';
import About from './Pages/About';

function App() {
  return (
   <div>
     <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Products" element={<Products />} />
      <Route exact path="/About" element={< About/>} />
      <Route exact path="/Learn" element={<Learn/>} />
       
      
     </Routes>
     
   
     </BrowserRouter>
     
     </div>
  );
}

export default App;
