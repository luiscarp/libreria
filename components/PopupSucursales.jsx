import React, { useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function PopupSucursales({ open, setOpen, sucursal, getData }) {
    const cancelButtonRef = useRef(null);

    const [nombreSucursal, setNombreSucursal] = useState('');
    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');
    const [colonia, setColonia] = useState('');

    useEffect(() => {
        if (sucursal) {
            setNombreSucursal(sucursal.Nombre_sucursal || '');
            setCalle(sucursal.Calle || '');
            setNumero(sucursal.Numero || '');
            setColonia(sucursal.Colonia || '');
        }
    }, [sucursal]);

    const actualizarSucursal = async () => {
        if (!nombreSucursal || !calle || !numero || !colonia) {
            toast.error("Por favor, rellena todos los campos");
            return;
        }

        try {
            await axios.put(`/api/db4/${sucursal.id}`, { nombreSucursal, calle, numero, colonia });
            toast.success("Sucursal actualizada correctamente");
            getData();
            setOpen(false);
        } catch (error) {
            toast.error("Error al actualizar la sucursal");
        }
    };

    return (
        <Transition.Root show={open} as={React.Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                {/* ... resto del código del modal ... */}
                <div className="mt-2 flex flex-col">
                    <input
                        type="text"
                        value={nombreSucursal}
                        placeholder="Nombre de la Sucursal"
                        onChange={(e) => setNombreSucursal(e.target.value)}
                        className="text-black mb-2"
                    />
                    <input
                        type="text"
                        value={calle}
                        placeholder="Calle"
                        onChange={(e) => setCalle(e.target.value)}
                        className="text-black mb-2"
                    />
                    <input
                        type="text"
                        value={numero}
                        placeholder="Número"
                        onChange={(e) => setNumero(e.target.value)}
                        className="text-black mb-2"
                    />
                    <input
                        type="text"
                        value={colonia}
                        placeholder="Colonia"
                        onChange={(e) => setColonia(e.target.value)}
                        className="text-black mb-2"
                    />
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={actualizarSucursal}
                    >
                        Actualizar
                    </button>
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                    >
                        Cancelar
                    </button>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
