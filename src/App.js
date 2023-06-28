import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'; 
import Learn from './Pages/Learn';
import About from './Pages/About';
import Company from './Pages/Company';
import Header from './Components/Header';



function App() {


  
  return (
   <div>
   
      <BrowserRouter>
     <Header />
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/About" element={< About/>} />
      <Route exact path="/Company" element={<Company />} />
      <Route exact path="/Learn" element={<Learn/>} />
       
      
     </Routes>
     
   
     </BrowserRouter>
    
     
     </div>
  );
  
}

export default App;
