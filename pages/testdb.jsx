import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

// peticiones al api

export async function getServerSideProps(){
    const res = await axios.get("http://localhost:3000/api/db")
    const data = await res.data
    return {
        props: {
            data
        }
    }

}


export default function Testdb({data}){

    console.log(data)

    const [loading, setLoading] = useState(false)

    const [nombre, setNombre] = useState("")

    const handleLoading = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)



      
    }

    return(
    <div>

      <div className='flex'>

        {loading ? (
          <button className=' bg-red-500' onClick={() => setLoading(false)}> Detener </button>
        ) : (
          <button className=' bg-green-500' onClick={ () => setLoading(true) }> iniciar </button>

        )}



      </div>
    <main className='h-screen w-screen bg-gray-500'>

      <h1 className='text-4xl text-center text-white'>
          Hola TestDB
      </h1>

      {data.map((alumno) => (
        <div className='flex' key={alumno.id}>
            <h1 className='text-white' > {alumno.nombre} </h1>
            <h1 className='text-white' > {alumno.apellido} </h1>

        </div>
        
      ) ) }

    </main>
  </div>
)


}


