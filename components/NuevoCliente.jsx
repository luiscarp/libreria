import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function NuevoCliente({ getData }) {
  const [nombreCliente, setNombreCliente] = useState('');
  const [numeroMembresia, setNumeroMembresia] = useState('');
  const [membresiaActiva, setMembresiaActiva] = useState('');
  const [direccionEnvio, setDireccionEnvio] = useState('');
  const [librosComprados, setLibrosComprados] = useState('');

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
      await axios.post("/api/db2", {
        nombre_cliente: nombreCliente,
        numero_membresia: numeroMembresia,
        membresia_activa: membresiaActiva,
        direccion_envio: direccionEnvio,
        libros_comprados: librosComprados,
      });
      toast.success("Cliente agregado correctamente");
      getData();
    } catch (error) {
      toast.error("Error al agregar el cliente");
    }
  };

  return (
    <div className=" w-1/2">
      <h1 className="text-black font-bold text-2xl">Agregar Nuevo Cliente</h1>
      <div className="flex flex-col">
        {/* Campos del formulario */}
        <input
          type="text"
          placeholder="Nombre del Cliente"
          onChange={(e) => setNombreCliente(e.target.value)}
          className="text-black mb-2"
        />
        <input
          type="text"
          placeholder="Número de Membresía"
          onChange={(e) => setNumeroMembresia(e.target.value)}
          className="text-black mb-2"
        />
        <input
          type="text"
          placeholder="Membresía Activa"
          onChange={(e) => setMembresiaActiva(e.target.value)}
          className="text-black mb-2"
        />
        <input
          type="text"
          placeholder="Dirección de Envío"
          onChange={(e) => setDireccionEnvio(e.target.value)}
          className="text-black mb-2"
        />
        <input
          type="text"
          placeholder="Libros Comprados"
          onChange={(e) => setLibrosComprados(e.target.value)}
          className="text-black mb-2"
        />
        <button
          className="bg-green-500 text-white p-2 rounded-lg"
          onClick={sendData}
        >
          Agregar Cliente
        </button>
      </div>
    </div>
  );
}

export default NuevoCliente;
