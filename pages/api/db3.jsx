import mysql from "mysql2";

export default async function handler(req, res) {
    const { method, body } = req

    switch (method) {
        case "GET":
            //configurar la conexion a la DB
            const connection = mysql.createConnection({
                host: "Localhost",
                port: 3306,
                user: "root",
                password: "samsungsony20",
                database: "bibliotecacurso"
            }

            )

            connection.query("SELECT * FROM libros", function (err, results, fields) {
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