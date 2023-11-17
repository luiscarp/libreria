import mysql from "mysql2";

export default async function handler(req, res) {
    const { method, body } = req

    const connection = mysql.createConnection({
        host: "Localhost",
        port: 3306,
        user: "root",
        password: "samsungsony20",
        database: "bibliotecacurso"
    }

    )

    switch (method) {
        case "GET":
            //configurar la conexion a la DB


            connection.query("SELECT * FROM alumnos", function (err, results, fields) {
                if (err) {
                    console.log(err)
                    res.status(500).json({ error: err })

                } else {
                    console.log(results)
                    res.status(200).json(results)
                }
            })

            connection.end()
            break

        case "POST":
            //configurar la conexion a la DB


            connection.query("INSERT INTO alumnos (nombre, apellido, correo, matricula, edad) VALUES(?,?,?,?,?)",
            [body.nombre, body.apellido, body.correo, body.matricula, body.edad], 
            
            
            
            function (err, results, fields) {
                if (err) {
                    console.log(err)
                    res.status(500).json({ error: err })

                } else {
                    console.log(results)
                    res.status(200).json(results)
                }
            })

            connection.end()
            break


    }



}



