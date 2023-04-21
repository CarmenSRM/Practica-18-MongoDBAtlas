const express = require('express');//Se hace la inyección de la dependecia express.
const mongoose = require('mongoose');//Se hace la inyección de la dependecia mongoose.
require("dotenv").config();//Se utiliza para crear llaves que permitan compartir información (la información se encuentra en el archivo .env)

const app = express();//Se ejecunta express
const port = process.env.PORT || 9000;//Se efecifica el puerto para que escuche el servidor (el estatico 9000 o resivir algun otro).

//routes
//ruta para comprobar que la conexión y el servidor respondan correctamente.
app.get('/', (res, req) => {
    res.setEncoding("Welmcome tom my API");//Muestra un mensaje de bienvenida
});

//mongoose connection
mongoose
    .connect(process.env.MONGODB_URI)//Se conecta (haciendo uso de una llave -se mensiona arriba-)
    .then(() => console.log('Connected to MongoDB Atlas'))//Muuestra el mensaje cuando la conexion es exitosa (lo contrario al catch).
    .catch((error) => console.log(error));//Se capturan y muestran los errores que se presenten.


app.listen(port, () => console.log('server listening on port', port)); //El pueto se pone a la escucha. 