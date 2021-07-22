const { request, response } = require('express');
const Busqueda = require('../models/busquedas'); 

const busqueda = new Busqueda(); 

const clima = async (request= '', response) => {
    const { cuidad } = request.query; 

    try {
        let busquedaCuidad = await busqueda.cuidad(cuidad); 
    
        let estadoClima = await busqueda.climaLugar(busquedaCuidad[0].lat, busquedaCuidad[0].lng)
    
        let datos = { cuidad: busquedaCuidad[0], clima: estadoClima }; 
    
        response.json(datos)
    } catch (error) {
        response.json({msj:'No se encontro la cuidad'})
    }


}

module.exports = {
    clima
}