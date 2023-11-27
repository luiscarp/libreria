import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import PopupClientes from "@/components/PopupClientes";
import Navbar from "@/components/Navbar";
import NuevoCliente from "@/components/NuevoCliente";
import ListaClientes from "@/components/ListaClientes";

// peticiones al api
export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/db2"); // Cambiar la URL a la API de clientes
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
}

export default function Testdb2() {
  const [data, setData] = useState([{}])
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)
  const [cliente, setCliente] = useState({})

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const res = await axios.get("/api/db2") // Cambiar a la URL adecuada
    const data = await res.data;
    setData(data);
  }

  const eliminarData = async (id) => {
    try {
      const resultado = await axios.delete(`/api/db2?id=${id}`) // Ajustar la URL de la API
      toast.success("Datos eliminados");
      getData();
    } catch (error) {
      toast.error("Error al eliminar");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <Toaster position="bottom-center" />
      <PopupClientes open={open} setOpen={setOpen} cliente={cliente} getData={getData}></PopupClientes>
      <div className="flex">
        <NuevoCliente getData={getData}></NuevoCliente>
        <ListaClientes cliente={cliente} data={data} setCliente={setCliente} getData={getData} open={open}></ListaClientes>
      </div>
    </div>
  );
}
