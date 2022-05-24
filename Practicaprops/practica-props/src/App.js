import React from 'react'
import Mascotas from './components/Mascotas';
import Persona from "./components/Persona";


function App() {
  return (
    <div className="App"> 
      <h1>Practica Props</h1>

      <h5>Persona</h5>
       <Persona 
       nombre='Isaac Martinez Martinez'
       edad={25}
       email='imm.martinezmtz@.com'
       />
       <Persona
       nombre='David Perez Lucas'
       edad={30}
       email='dpl.lucasperez@.com'
       />
       <Persona
       nombre='JUAN Cruz Lopez'
       edad={25}
       email='j.lopezcruz@.com'
       />
       

        <h2>Macotas</h2>
       <Mascotas
       nombre='Manchas'
       raza='Pitbull'
       color='Blanco con manchas negras'
       peso={20}
       />


       <Mascotas
       nombre='Cafe'
       raza='chihuahua'
       color='cafe'
       peso={10}
       />

       <Mascotas
       nombre='Huesos'
       raza='san Bernardo'
       color='Blanco con manchas negras y cafes'
       peso={30}
       />
    </div>
  );
}

export default App;
