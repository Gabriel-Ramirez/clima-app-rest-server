const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.climaPath = '/api/clima'; 

        //Middlewares
        this.middlewares();

        //Rutas de la aplicacion
        this.routes();
    }

    middlewares() {

        this.app.use(cors())

        // Lectura y parseo del body http
        this.app.use( express.json()); 

    }

    routes() {
        this.app.use(this.climaPath, require('../routes/clima'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en http://localhost:${this.port}`);
        });
    }

}

module.exports = Server; 