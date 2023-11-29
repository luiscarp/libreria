import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PopupMongo from './PopupMongo'
import toast from 'react-hot-toast'


function ListaAlumnosMongo({ alumno, setAlumno}) {


  const [data, setData] = useState([{}])

  const [open, setOpen] = useState(false)

  const eliminarData = async (id) => {
    console.log("eliminarData", id);
    try {
      const resultado = await axios.delete(`/api/db?id=${id}`)
      console.log(resultado)
      toast.success("datos elminiados")
      getData()

    }
    catch {

      toast.error("error al eliminar")

    }


  };




  
  const getData = async () => {
    try {
      const res = await axios.get("/api/testmongodb");
      setData(res.data);
    } catch (error) {
      toast.error('Error al cargar los datos');
    }
  };
  
  useEffect(() => {
    getData();
  }, []); // Esto se ejecutará solo una vez cuando el componente se monte

  return (

    <span className=' w-1/2'>
      
      <PopupMongo open = {open} setOpen={setOpen} alumno={alumno} getData ={getData}></PopupMongo>


      <h1 className=" text-black font-bold text-2xl"> Lista de alumnos </h1>

      {data.map((alumno) => (
        <div className="flex" key={alumno.PKid}>
          <div className='flex w-44'>
            <h1 className="text-black mx-1 my-2"> {alumno.nombre} </h1>
            <h1 className="text-black mx-1 my-2 "> {alumno.apellido} </h1>
          </div>

          <div className=' flex w-28 justify-between'>
            <button
              className=" my-5 text-red-600"
              onClick={() => eliminarData(alumno.PKid)}

            >
              Eliminar
            </button>
            <button
              className=" my-2  text-blue-600"
              onClick={() => {

                setAlumno(alumno),
  
                  setOpen(true)



  
  
              }
  
  
  
  
              }

            >
              Editar
            </button>

          </div>

        </div>
      ))}





    </span>
  )
}

export default ListaAlumnosMongo
