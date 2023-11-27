import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function PopupClientes({ open, setOpen, cliente, getData }) {
    const cancelButtonRef = useRef(null)

    const [nombreCliente, setNombreCliente] = useState(cliente.Nombre_cliente)
    const [numeroMembresia, setNumeroMembresia] = useState(cliente.Numero_membresia)
    const [membresiaActiva, setMembresiaActiva] = useState(cliente.Membresia_activa)
    const [direccionEnvio, setDireccionEnvio] = useState(cliente.Direccion_envio)
    const [librosComprados, setLibrosComprados] = useState(cliente.Libros_comprados)

    useEffect(() => {
        setNombreCliente(cliente.Nombre_cliente)
        setNumeroMembresia(cliente.Numero_membresia)
        setMembresiaActiva(cliente.Membresia_activa)
        setDireccionEnvio(cliente.Direccion_envio)
        setLibrosComprados(cliente.Libros_comprados)
    }, [cliente])

    const sendData = async () => {
        if (
            !nombreCliente ||
            !numeroMembresia ||
            !membresiaActiva ||
            !direccionEnvio ||
            !librosComprados
        ) {
            toast.error("Llena todos los campos");
            return;
        }
        try {
            const resultado = await axios.put("/api/clientes", {
                Nombre_cliente: nombreCliente,
                Numero_membresia: numeroMembresia,
                Membresia_activa: membresiaActiva,
                Direccion_envio: direccionEnvio,
                Libros_comprados: librosComprados,
                id: cliente.PKid // Asumiendo que cada cliente tiene un identificador único
            });
            toast.success("Cliente actualizado correctamente");
            getData();
            setOpen(false);
        } catch (error) {
            console.error(error);
            toast.error("Error al actualizar el cliente");
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
                                                    value={nombreCliente}
                                                    className='text-black'
                                                    
                                                    onChange={(e) => setNombreCliente(e.target.value)}
                                                />
                                                <input
                                                    type="text"
                                                    value={numeroMembresia}
                                                    className='text-black'
                                                    
                                                    onChange={(e) => setNumeroMembresia(e.target.value)}
                                                />
                                                <input
                                                    type="text"
                                                    value={membresiaActiva}
                                                    className='text-black'
                                                   
                                                    onChange={(e) => setMembresiaActiva(e.target.value)}
                                                />
                                                <input
                                                    type="text"
                                                    value={direccionEnvio}
                                                    className='text-black'
                                                    
                                                    onChange={(e) => setDireccionEnvio(e.target.value)}
                                                />
                                                <input
                                                    type="text"
                                                    value={librosComprados}
                                                    className='text-black'
                                                   
                                                    onChange={(e) => setLibrosComprados(e.target.value)}
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