import mysql from "mysql2";


export default async function handler(req, res) {
    const { method, body, query } = req

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


            connection.query("SELECT * FROM clientes", function (err, results, fields) {
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


            connection.query("INSERT INTO clientes (Nombre_cliente, Numero_membresia, Membresia_activa, Direccion_envio, Libros_comprados) VALUES(?,?,?,?,?)",
                [body.nombre_cliente, body.numero_membresia, body.membresia_activa, body.direccion_envio, body.libros_comprados],



                function (err, results, fields) {
                    if (err) {
                        console.log(err)
                        res.status(500).json({ error: err })

                    } else {
                        console.log(results)
                        connection.end()
                        return res.status(200).json(results)
                    }
                })


            break

        case "DELETE":
            console.log(query)
            connection.query(
                "DELETE FROM clientes WHERE PKid = ?",
                [query.id],
                function (err, results, fields) {
                    if (err) {
                        console.log(err)
                        res.status(500).json({ error: err })
                    } else {
                        console.log(results)
                        connection.end()
                        return res.status(200).json(results)
                    }
                }




            )
            break

        case "PUT":
            console.log(body)
            connection.query(
                "UPDATE clientes SET Nombre_cliente = ?, Numero_membresia = ?, Membresia_activa = ?, Direccion_envio = ?, Libros_comprados = ? WHERE PKid = ? ",
                [body.nombre_cliente, body.numero_membresia, body.membresia_activa, body.direccion_envio, body.libros_comprados, body.id],
                function (err, results, fields) {
                    if (err) {
                        console.log(err)
                        res.status(500).json({ error: err })
                    } else {
                        console.log(results)
                        connection.end()
                        return res.status(200).json(results)
                    }
                }

            )


    }



}



