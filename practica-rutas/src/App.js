import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <center><h1>Practica React Router</h1></center>
      <Navbar />
      <Outlet/>
      
    </div>
  );
}

export default App;
