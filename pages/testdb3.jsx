import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import PopupLibros from "@/components/PopupLibros"; // Asumiendo que tienes este componente
import Navbar from "@/components/Navbar";
import NuevoLibro from "@/components/NuevoLibro"; // Asumiendo que tienes este componente
import ListaLibros from "@/components/ListaLibros"; // Asumiendo que tienes este componente

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/db3");
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
}

export default function Testdb3() {
  const [data, setData] = useState([{}]);
  const [open, setOpen] = useState(false);
  const [libro, setLibro] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("/api/db3");
      setData(res.data);
    } catch (error) {
      toast.error("Error al cargar los datos");
    }
  };

  const eliminarData = async (id) => {
    try {
      await axios.delete(`/api/db3/${id}`);
      toast.success("Libro eliminado correctamente");
      getData();
    } catch (error) {
      toast.error("Error al eliminar el libro");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <Toaster position="bottom-center" />
      <PopupLibros open={open} setOpen={setOpen} libro={libro} getData={getData} />
      <div className="flex">
        <NuevoLibro getData={getData} />
        <ListaLibros libro={libro} data={data} setLibro={setLibro} getData={getData} open={open} />
      </div>
    </div>
  );
}
