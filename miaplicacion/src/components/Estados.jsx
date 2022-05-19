import React from 'react'

const Estados = () => {
    //Declaracion de HOOK
    const [texto, setTexto] = React.useState("Estado Inicial");
    const[contador, setContador]= React.useState(0)

    const cambiarEstado = () =>{
        setTexto("Cambiaste el Estado")
        setContador(contador + 1)
    }
  return (
    <div>
        <>
            <h3>{texto}: {contador} veces</h3>
            <button onClick={()=>cambiarEstado()}>Mágia</button>  
        </>
    </div>
  )
}

export default Estados