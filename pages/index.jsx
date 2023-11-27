import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //logica en js
  const name = "Juan"


  return (
    
      <div className= ' h-screen flex-col justify-center items-center bg-[url("https://www.comunidadbaratz.com/wp-content/uploads/Los-6-puntos-basicos-que-caracterizan-a-las-bibliotecas-especializadas.jpg")] bg-cover bg-center'>

      <h1 className='text-white text-6xl font-bold my-5'> Sistema de bibliotecas estudiantiles CUU </h1>

      <div className='flex justify-between mt-60'>
        <a className=' text-white text-4xl mx-8' href='/testdb'> Alumnos </a>

        <a className=' text-white text-4xl mx-8' href='/testdb2'> Clientes </a>

        <a className=' text-white text-4xl mx-8' href='/testdb3'> Libros </a>

        <a className=' text-white text-4xl mx-8' href='/testdb4'> Sucursales </a>

      </div>



      
    </div>
    

  )
}
