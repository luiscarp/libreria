import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function NuevoLibro({ getData }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [paginas, setPaginas] = useState('');
  const [editorial, setEditorial] = useState('');
  const [categoria, setCategoria] = useState('');

  const enviarDatos = async () => {
    if (!titulo || !autor || !paginas || !editorial || !categoria) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      await axios.post("/api/db3", { titulo, autor, paginas, editorial, categoria });
      toast.success("Libro agregado correctamente");
      getData();
    } catch (error) {
      toast.error("Error al agregar el libro");
    }
  };

  return (
    <div className="w-1/2">
      <h2 className="text-2xl font-bold mb-4 text-black">Agregar Nuevo Libro</h2>
      <div className="flex flex-col mb-4">
        <input
          type="text"
          placeholder="Título"
          onChange={(e) => setTitulo(e.target.value)}
          className="mb-2"
        />
        <input
          type="text"
          placeholder="Autor"
          onChange={(e) => setAutor(e.target.value)}
          className="mb-2"
        />
        <input
          type="number"
          placeholder="Páginas"
          onChange={(e) => setPaginas(e.target.value)}
          className="mb-2"
        />
        <input
          type="text"
          placeholder="Editorial"
          onChange={(e) => setEditorial(e.target.value)}
          className="mb-2"
        />
        <input
          type="text"
          placeholder="Categoría"
          onChange={(e) => setCategoria(e.target.value)}
          className="mb-2"
        />
      </div>
      <button
        onClick={enviarDatos}
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        Agregar Libro
      </button>
    </div>
  );
}

export default NuevoLibro;
