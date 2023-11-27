import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import PopupLibros from './PopupLibros'; // Asegúrate de tener este componente

function ListaLibros({ libro, setLibro, getData, data }) {
  const [open, setOpen] = React.useState(false);

  const eliminarLibro = async (id) => {
    try {
      await axios.delete(`/api/db3/${id}`);
      toast.success("Libro eliminado exitosamente");
      getData();
    } catch (error) {
      toast.error("Error al eliminar el libro");
    }
  };

  const abrirPopupEditar = (libro) => {
    setLibro(libro);
    setOpen(true);
  };

  return (
    <div className="w-full">
      <PopupLibros open={open} setOpen={setOpen} libro={libro} getData={getData} />
      <h2 className="text-2xl font-bold mb-4 text-black">Lista de Libros</h2>
      <div>
        {/* Aquí va el código para listar los libros */}
        {data.map((libro, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <div>
              <p className=' text-black'><strong>Título:</strong> {libro.titulo}</p>
              <p className=' text-black'><strong>Autor:</strong> {libro.autor}</p>
              <p className=' text-black'><strong>Páginas:</strong> {libro.paginas}</p>
              <p className=' text-black'><strong>Editorial:</strong> {libro.editorial}</p>
              <p className=' text-black'><strong>Categoría:</strong> {libro.categoria}</p>
            </div>
            <div>
              <button onClick={() => abrirPopupEditar(libro)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                Editar
              </button>
              <button onClick={() => eliminarLibro(libro.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaLibros;
