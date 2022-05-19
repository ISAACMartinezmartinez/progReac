import React from 'react'
import pero from '../imagenes/Perro.jpg'
import gato from '../imagenes/gato.jpg'
import conejo from '../imagenes/conejo.jpg'


const Cambio =() => {
  const [animal, setAnimal] = React.useState("Selecciona animal")
    
const cambiarEstado = () =>{
  const animales=[["Perro", pero], ["Gato",gato], ["Conejo",conejo]]
  let num = Math.floor(Math.random()*(3-0)-0);
  let animal = animales[num]
  setAnimal(animal)
}
  return (
    <>
    <h3>
      {animal[0]}
    </h3>
    <img src={animal[1]}></img>
    <button onClick= {()=>cambiarEstado()}>CAMBIAR</button>
    </>
  )
}

export default Cambio