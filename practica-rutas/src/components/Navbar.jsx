import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className='nav navbar-pdark bg-dark'>
        <div className="container">
        <NavLink to='/' className="btn btn-outline-primary">Inicio</NavLink>
        <NavLink to='/videojuegos' className="btn btn-outline-primary">Videojuegos</NavLink>
        <NavLink to='/clasificacion' className="btn btn-outline-primary">Clasificacion</NavLink>
        </div>
        


    </nav>
  )
}

export default Navbar