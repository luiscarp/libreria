import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //logica en js
  const name = "Juan"


  return (
    <main className='h-screen w-screen bg-gray-500 flex-col'>
      <h1 className='text-white text-6xl'> Hola {name} </h1>

      <Link href="/testdb" className='text-4xl text-center text-white'>
        alumnos
      </Link>
      <Link href="/testdb2" className='text-4xl text-center text-white'>
        clientes
      </Link>
      <Link href="/testdb3" className='text-4xl text-center text-white'>
        libros
      </Link>
      <Link href="/testdb4" className='text-4xl text-center text-white'>
        sucursales
      </Link>

      
    </main>
  )
}
