import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import PopupSucursales from './PopupSucursales'; // Asegúrate de tener este componente

function ListaSucursales({ data, setSucursal, getData }) {
  const [open, setOpen] = React.useState(false);

  const eliminarSucursal = async (id) => {
    try {
      await axios.delete(`/api/db4/${id}`);
      toast.success("Sucursal eliminada exitosamente");
      getData();
    } catch (error) {
      toast.error("Error al eliminar la sucursal");
    }
  };

  const abrirPopupEditar = (sucursal) => {
    setSucursal(sucursal);
    setOpen(true);
  };

  return (
    <div className="w-full">
      <PopupSucursales open={open} setOpen={setOpen} sucursal={setSucursal} getData={getData} />
      <h2 className="text-2xl font-bold mb-4 text-black">Lista de Sucursales</h2>
      <div>
        {data.map((sucursal, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <div className="text-black">
              <p><strong>Nombre:</strong> {sucursal.Nombre_sucursal}</p>
              <p><strong>Calle:</strong> {sucursal.Calle}</p>
              <p><strong>Número:</strong> {sucursal.Numero}</p>
              <p><strong>Colonia:</strong> {sucursal.Colonia}</p>
            </div>
            <div>
              <button onClick={() => abrirPopupEditar(sucursal)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                Editar
              </button>
              <button onClick={() => eliminarSucursal(sucursal.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaSucursales;
