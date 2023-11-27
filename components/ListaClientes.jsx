import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import PopupClientes from './PopupClientes';

function ListaClientes({ setCliente }) {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get("/api/db2");
      setData(res.data);
    } catch (error) {
      toast.error('Error al cargar los datos');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const eliminarData = async (id) => {
    try {
      await axios.delete(`/api/db2?id=${id}`);
      toast.success("Cliente eliminado");
      getData();
    } catch (error) {
      toast.error("Error al eliminar el cliente");
    }
  };

  return (
    <div className=" w-1/2">
      <PopupClientes open={open} setOpen={setOpen} cliente={setCliente} getData={getData} />
      <h1 className="text-black font-bold text-2xl">Lista de Clientes</h1>
      {data.map((cliente, index) => (
        <div className="flex justify-between p-2" key={index}>
          <div>
            <p className=' text-black'>{cliente.Nombre_cliente}</p>
            <p className=' text-black'>{cliente.Numero_membresia}</p>
            <p className=' text-black'>{cliente.Membresia_activa ? 'Activa' : 'Inactiva'}</p>
            <p className=' text-black'>{cliente.Direccion_envio}</p>
            <p className=' text-black'>{cliente.Libros_comprados}</p>
          </div>
          <div>
            <button
              className="mr-2 bg-blue-500 text-white p-2 rounded"
              onClick={() => {
                setCliente(cliente);
                setOpen(true);
              }}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={() => eliminarData(cliente.PKid)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaClientes;
