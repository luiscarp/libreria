import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Popup from "@/components/Popup";
import Navbar from "@/components/Navbar";
import NuevoAlumno from "@/components/NuevoAlumno";
import ListaAlumnos from "@/components/ListaAlumnos";




// peticiones al api



export default function Testdb() {
  //console.log(data)

  const [data, setData] = useState([{}])

  const [loading, setLoading] = useState(false);

  

  const[open, setOpen] = useState(false)

  const[alumno, setAlumno] = useState({})

  const getData = async () => {
    toast.loading("wenas getData")
    const res = await axios.get("/api/db")
    const data = await res.data
    setData(data)
    toast.dismiss()
    toast.success("se supone que ya quedo")
  }







  return (
    <div>
      <Navbar></Navbar>
      <Toaster position="bottom-center" />

      <Popup open = {open} setOpen={setOpen} alumno={alumno} getData ={getData}></Popup>


      <div className="flex">
        <NuevoAlumno  getData ={getData} ></NuevoAlumno>

        <ListaAlumnos alumno={alumno} data={data} setAlumno = {setAlumno}  getData= {getData} open = {open}></ListaAlumnos>





      </div>

      


    </div>
  );
}
