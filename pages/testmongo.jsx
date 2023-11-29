import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import PopupMongo from "@/components/PopupMongo";
import Navbar from "@/components/Navbar";
import NuevoAlumnoMongo from "@/components/NuevoAlumnoMongo";
import ListaAlumnosMongo from "@/components/ListaAlumnosMongo";




// peticiones al api



export default function TestMongo() {
  //console.log(data)

  const [data, setData] = useState([{}])

  const [loading, setLoading] = useState(false);

  

  const[open, setOpen] = useState(false)

  const[alumno, setAlumno] = useState({})

  const getData = async () => {
    toast.loading("wenas getData")
    const res = await axios.get("/api/testmongodb")
    const data = await res.data
    setData(data)
    toast.dismiss()
    toast.success("se supone que ya quedo")
  }







  return (
    <div>
      <Navbar></Navbar>
      <Toaster position="bottom-center" />

      <PopupMongo open = {open} setOpen={setOpen} alumno={alumno} getData ={getData}></PopupMongo>


      <div className="flex">
        <NuevoAlumnoMongo  getData ={getData} ></NuevoAlumnoMongo>

        <ListaAlumnosMongo alumno={alumno} data={data} setAlumno = {setAlumno}  getData= {getData} open = {open}></ListaAlumnosMongo>





      </div>

      


    </div>
  );
}
