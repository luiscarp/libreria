import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

// peticiones al api

export async function getServerSideProps(){
    const res = await axios.get("http://localhost:3000/api/db4")
    const data = await res.data
    return {
        props: {
            data
        }
    }

}


export default function Testdb4({data}){

    console.log(data)

    return(
    <div>
    <main className='h-screen w-screen bg-gray-500'>


      <h1 className='text-4xl text-center text-white'>
          Hola TestDB
      </h1>
      {data.map((sucursal) => (
        <div className='flex-col' key={libro.id}>
            <h1 className='text-white' > {sucursal.Nombre_sucursal} </h1>
            <h1 className='text-white' > {sucursal.Calle} </h1>

        </div>
        
      ) ) }

    </main>
  </div>
)


}


