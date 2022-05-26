import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Videojuegos from './routers/Videojuegos';
import Clasificacion from './routers/Clasificacion';
import Inicio from './routers/Inicio';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<App />}> 
      <Route index element={<Inicio />}/>
      <Route path='videojuegos'element={<Videojuegos />}/>
      <Route path='clasificacion'element={<Clasificacion />}/>
    </Route>
  </Routes>
  </BrowserRouter>
);