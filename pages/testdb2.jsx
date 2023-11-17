import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

// peticiones al api

export async function getServerSideProps(){
    const res = await axios.get("http://localhost:3000/api/db2")
    const data = await res.data
    return {
        props: {
            data
        }
    }

}


export default function Testdb2({data}){

    console.log(data)

    return(
    <div>
    <main className='h-screen w-screen bg-gray-500'>


      <h1 className='text-4xl text-center text-white'>
          Hola TestDB
      </h1>
      {data.map((cliente) => (
        <div className='flex-col' key={cliente.id}>
            <h1 className='text-white' > {cliente.Nombre_cliente} </h1>
            <h1 className='text-white' > {cliente.Direccion_envio} </h1>

        </div>
        
      ) ) }

    </main>
  </div>
)


}


