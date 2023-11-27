import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function NuevaSucursal({ getData }) {
  const [nombreSucursal, setNombreSucursal] = useState('');
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');
  const [colonia, setColonia] = useState('');

  const agregarSucursal = async () => {
    if (!nombreSucursal || !calle || !numero || !colonia) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      await axios.post("/api/db4", { nombreSucursal, calle, numero, colonia });
      toast.success("Sucursal agregada correctamente");
      getData();
    } catch (error) {
      toast.error("Error al agregar la sucursal");
    }
  };

  return (
    <div className="w-1/2">
      <h2 className="text-2xl font-bold mb-4 text-black">Agregar Nueva Sucursal</h2>
      <div className="flex flex-col mb-4">
        <input
          type="text"
          placeholder="Nombre de la Sucursal"
          value={nombreSucursal}
          onChange={(e) => setNombreSucursal(e.target.value)}
          className="mb-2 text-black"
        />
        <input
          type="text"
          placeholder="Calle"
          value={calle}
          onChange={(e) => setCalle(e.target.value)}
          className="mb-2 text-black"
        />
        <input
          type="text"
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          className="mb-2 text-black"
        />
        <input
          type="text"
          placeholder="Colonia"
          value={colonia}
          onChange={(e) => setColonia(e.target.value)}
          className="mb-2 text-black"
        />
      </div>
      <button
        onClick={agregarSucursal}
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        Agregar Sucursal
      </button>
    </div>
  );
}

export default NuevaSucursal;
