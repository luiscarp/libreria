import React from 'react'

function Navbar() {
  return (
    <nav style={{ background: 'black', color: 'white', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li><a style={{ color: 'white', textDecoration: 'none' }} href="/">Home</a></li>
        <li><a style={{ color: 'white', textDecoration: 'none' }} href="/testdb">Alumnos</a></li>
        <li><a style={{ color: 'white', textDecoration: 'none' }} href="/testdb2">Clientes</a></li>
        <li><a style={{ color: 'white', textDecoration: 'none' }} href="/testdb3">Libros</a></li>
        <li><a style={{ color: 'white', textDecoration: 'none' }} href="/testdb4">Sucursales</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
