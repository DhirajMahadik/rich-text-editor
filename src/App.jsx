import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { useState } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from './components/Home';
import SingleBlog from './components/SingleBlog';
// import SideBar from './components/SideBar';

function App() {

  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      
      {/* <SideBar/> */}
      <Routes>
          <Route path='/' element={<Home/>}>
          <Route path='/blog/:id' element={<SingleBlog/>}/>
          </Route>

      </Routes>
      
  
    </BrowserRouter>
  );
}

export default App;
