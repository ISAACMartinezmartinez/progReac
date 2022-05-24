import React from 'react'

const Mascotas = ({nombre, raza, color, peso}) => {
  return (
    <div>
        <ul>
            <li>Nombre: {nombre} </li>
            <li>Raza: {raza}</li>
            <li>color: {color}</li>
            <li>Peso: {peso} Kilos</li>
        </ul>
    </div>
  )
}

export default Mascotas