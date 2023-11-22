import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";




// peticiones al api

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/db");
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
}

export default function Testdb() {
  //console.log(data)

  const [data, setData] = useState([{}])

  const [loading, setLoading] = useState(false);

  const [nombre, setNombre] = useState("");

  const [apellido, setApellido] = useState("");

  const [correo, setCorreo] = useState("");

  const [matricula, setMatricula] = useState("");

  const [edad, setEdad] = useState("");

  useEffect(() => {
    console.log("useEffect")

    getData(data)
  }, [])


  const getData = async () => {
    const res = await axios.get("/api/db")
    const data = await res.data
    setData(data)
  }


  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

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

  const eliminarData = async (id) => {
    console.log("eliminarData", id);
    try {
      const resultado = await axios.delete(`/api/db?id=${id}`)
      console.log(resultado)
      toast.success("datos elminiados")
      getData()

    }
    catch {

      toast.error("error al eliminar")

    }


  };

  return (
    <div>
      <Toaster position="bottom-center" />

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellidos"
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="text"
          placeholder="Correo"
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Matricula"
          onChange={(e) => setMatricula(e.target.value)}
        />
        <input
          type="text"
          placeholder="Edad"
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>

      <div className="flex">
        {loading ? (
          <button className=" bg-red-500" disabled>
            {" "}
            Detener{" "}
          </button>
        ) : (
          <button className=" bg-green-500" onClick={sendData}>
            {" "}
            iniciar{" "}
          </button>
        )}
      </div>
      <main className="h-screen w-screen bg-gray-500">
        <h1 className="text-4xl text-center text-white">Hola TestDB</h1>

        {data.map((alumno) => (
          <div className="flex" key={alumno.PKid}>
            <h1 className="text-white"> {alumno.nombre} </h1>
            <h1 className="text-white"> {alumno.apellido} </h1>
            <button
              className=" mx-3 bg-red-600 text-gray-50"
              onClick={() => eliminarData(alumno.PKid)}
            >
              Elminar
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
