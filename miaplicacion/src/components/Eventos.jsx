import React from 'react'

const Eventos = () => {
    const miEvento = () =>{
        alert('Oouch me pulsaste')
    }
  return (
    <>
        <button onClick={()=>miEvento()}>Dame click</button>
    
    </>
  ) 
}

export default Eventos
