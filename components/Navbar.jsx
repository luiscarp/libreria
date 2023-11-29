import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav style={{ background: 'black', color: 'white', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} href="/">Home</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} href="/testdb">Alumnos</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} href="/testdb2">Clientes</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} href="/testdb3">Libros</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} href="/testdb4">Sucursales</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
