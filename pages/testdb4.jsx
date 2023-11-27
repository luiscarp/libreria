import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import PopupSucursales from "@/components/PopupSucursales"; // Asumiendo que tienes este componente
import Navbar from "@/components/Navbar";
import NuevaSucursal from "@/components/NuevaSucursal"; // Asumiendo que tienes este componente
import ListaSucursales from "@/components/ListaSucursales"; // Asumiendo que tienes este componente

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/db4");
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
}

export default function Testdb4() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [sucursal, setSucursal] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("/api/db4");
      setData(res.data);
    } catch (error) {
      toast.error("Error al cargar los datos");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <Toaster position="bottom-center" />
      <PopupSucursales open={open} setOpen={setOpen} sucursal={sucursal} getData={getData} />
      <div className="flex">
        <NuevaSucursal getData={getData} />
        <ListaSucursales sucursal={sucursal} data={data} setSucursal={setSucursal} getData={getData} open={open} />
      </div>
    </div>
  );
}
