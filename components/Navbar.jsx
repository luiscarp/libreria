import React from 'react'

function Navbar() {
  return (
    <nav style={{ background: 'black', color: 'white', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li><link style={{ color: 'white', textDecoration: 'none' }} href="/">Home</link></li>
        <li><link style={{ color: 'white', textDecoration: 'none' }} href="/testdb">Alumnos</link></li>
        <li><link style={{ color: 'white', textDecoration: 'none' }} href="/testdb2">Clientes</link></li>
        <li><link style={{ color: 'white', textDecoration: 'none' }} href="/testdb3">Libros</link></li>
        <li><link style={{ color: 'white', textDecoration: 'none' }} href="/testdb4">Sucursales</link></li>
      </ul>
    </nav>
  )
}

export default Navbar
