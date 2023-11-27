import React, { useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function PopupLibros({ open, setOpen, libro, getData }) {
    const cancelButtonRef = useRef(null);

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [paginas, setPaginas] = useState('');
    const [editorial, setEditorial] = useState('');
    const [categoria, setCategoria] = useState('');

    useEffect(() => {
        if (libro) {
            setTitulo(libro.titulo || '');
            setAutor(libro.autor || '');
            setPaginas(libro.paginas || '');
            setEditorial(libro.editorial || '');
            setCategoria(libro.categoria || '');
        }
    }, [libro]);

    const actualizarLibro = async () => {
        if (!titulo || !autor || !paginas || !editorial || !categoria) {
            toast.error("Por favor, rellena todos los campos");
            return;
        }

        try {
            await axios.put(`/api/db3/${libro.id}`, { titulo, autor, paginas, editorial, categoria });
            toast.success("Libro actualizado correctamente");
            getData();
            setOpen(false);
        } catch (error) {
            toast.error("Error al actualizar el libro");
        }
    };

    return (
        <Transition.Root show={open} as={React.Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                {/* ... resto del código del modal ... */}
                <div className="mt-2 flex flex-col">
                    <input
                        type="text"
                        value={titulo}
                        placeholder="Título"
                        onChange={(e) => setTitulo(e.target.value)}
                        className="text-black mb-2"
                    />
                    <input
                        type="text"
                        value={autor}
                        placeholder="Autor"
                        onChange={(e) => setAutor(e.target.value)}
                        className="text-black mb-2"
                    />
                    <input
                        type="number"
                        value={paginas}
                        placeholder="Páginas"
                        onChange={(e) => setPaginas(e.target.value)}
                        className="text-black mb-2"
                    />
                    <input
                        type="text"
                        value={editorial}
                        placeholder="Editorial"
                        onChange={(e) => setEditorial(e.target.value)}
                        className="text-black mb-2"
                    />
                    <input
                        type="text"
                        value={categoria}
                        placeholder="Categoría"
                        onChange={(e) => setCategoria(e.target.value)}
                        className="text-black mb-2"
                    />
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={actualizarLibro}
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
