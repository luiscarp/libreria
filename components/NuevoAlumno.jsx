import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";



function NuevoAlumno(getData) {

  const [loading, setLoading] = useState(false);

  const [nombre, setNombre] = useState("");

  const [apellido, setApellido] = useState("");

  const [correo, setCorreo] = useState("");

  const [matricula, setMatricula] = useState("");

  const [edad, setEdad] = useState("");

 

  const [data, setData] =  useState([{}])

  
  
  
  const sendData = async () => {
    setLoading(true);
    console.log("sendData");
    console.log(nombre, apellido, correo, matricula, edad);
    if (
      nombre === "" ||
      apellido === "" ||
      correo === "" ||
      matricula === "" ||
      edad === ""
    ) {
      toast.error("Llena todos los campos");
      setLoading(false);
  
      return;
    }
  
    try {
      const resultado = await axios.post("/api/db", {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        matricula: matricula,
        edad: edad,
      });
      toast.success("datos correctos");
      getData()
    } catch (error) {
      console.log(console.log(error));
    }
  
    setLoading(false);
  };
  




  

  return (
    <span className=" w-1/2">
      <h1 className=" text-black font-bold text-2xl"> Agregar Nuevo alumno </h1>
      <div className="flex flex-col">
        <label htmlFor="" className=" text-black text-2xl mt-4">
          {" "}
          Insertar nombre del alumno
        </label>
        <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} className=" text-black"/>

        <label htmlFor="" className=" text-black text-2xl mt-4">
          {" "}
          Insertar apellidos del alumno
        </label>
        <input type="text" placeholder="Apellidos"  onChange={(e) => setApellido(e.target.value)} className=" text-black" />

        <label htmlFor="" className=" text-black text-2xl mt-4">
          {" "}
          Insertar correo del alumno
        </label>
        <input type="text" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} className=" text-black" />

        <label htmlFor="" className=" text-black text-2xl mt-4">
          {" "}
          Insertar matricula del alumno
        </label>
        <input type="text" placeholder="Matricula" onChange={(e) => setMatricula(e.target.value)} className=" text-black"/>

        <label htmlFor="" className=" text-black text-2xl mt-4">
          {" "}
          Insertar edad del alumno
        </label>
        <input type="text" placeholder="Edad" onChange={(e) => setEdad(e.target.value)} className=" text-black"/>
      </div>

      <div className="flex mt-5">
        {loading ? (
          <button className=" bg-red-500" disabled>
            {" "}
            Detener{" "}
          </button>
        ) : (
          <button className=" bg-green-500 p-2 rounded-lg text-white" onClick={sendData}>
            {" "}
            Agregar Alumno{" "}
          </button>
        )}
      </div>
    </span>
  );
}

export default NuevoAlumno;
