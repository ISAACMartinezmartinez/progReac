import React from 'react'

const Persona = (props) => {
  return (
    <div>
        <h5>Nombre: {props.nombre}</h5>
        <h5>Edad: {props.edad} años</h5>
        <h5>Email: {props.email}</h5>
    </div>
  )
}

export default Persona