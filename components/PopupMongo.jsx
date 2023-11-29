import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { Alice } from 'next/font/google'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function PopupMongo({ open, setOpen, alumno, getData }) {


    const cancelButtonRef = useRef(null)

    const [nombre, setNombre] = useState(alumno.nombre)

    const [apellido, setApellido] = useState(alumno.apellido)

    const [correo, setCorreo] = useState(alumno.correo)

    const [matricula, setMatricula] = useState(alumno.matricula)

    const [edad, setEdad] = useState(alumno.edad)

    useEffect(() => {
        setNombre(alumno.nombre)

        setApellido(alumno.apellido)

        setCorreo(alumno.correo)

        setMatricula(alumno.matricula)

        setEdad(alumno.edad)
    }, [alumno])

    const sendData = async () =>{
        console.log("send data")
        console.log(nombre, apellido, correo, matricula, edad)
        if (
            nombre === "" ||
            apellido === "" ||
            correo === "" ||
            matricula === "" ||
            edad === ""
          ) {
            toast.error("Llena todos los campos");
      
            return;
          }
          try {
            const resultado = await axios.put("/api/testmongodb", {
              nombre: nombre,
              apellido: apellido,
              correo: correo,
              matricula: matricula,
              edad: edad,
              id: alumno.PKid
            });
            toast.success("datos correctos");
            getData()
            setOpen(false)
          } catch (error) {
            console.log(console.log(error));
          }
      



    }

    


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Edita al alumno
                                            </Dialog.Title>
                                            <div className="mt-2 flex flex-col">
      
                                                    <input
                                                        type="text"
                                                        value={nombre}
                                                        className='text-black'
                                                        placeholder="Nombre"
                                                        onChange={(e) => setNombre(e.target.value)}
                                                    />
                                                    <input
                                                        type="text"
                                                        value={apellido}
                                                        className='text-black'
                                                        placeholder="Apellidos"
                                                        onChange={(e) => setApellido(e.target.value)}
                                                    />
                                                    <input
                                                        type="text"
                                                        value={correo}
                                                        className='text-black'
                                                        placeholder="Correo"
                                                        onChange={(e) => setCorreo(e.target.value)}
                                                    />
                                                    <input
                                                        type="text"
                                                        value={matricula}
                                                        className='text-black'
                                                        placeholder="Matricula"
                                                        onChange={(e) => setMatricula(e.target.value)}
                                                    />
                                                    <input
                                                        type="text"
                                                        value={edad}
                                                        className='text-black'
                                                        placeholder="Edad"
                                                        onChange={(e) => setEdad(e.target.value)}
                                                    />
  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => sendData()}
                                    >
                                        Actualizar
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}