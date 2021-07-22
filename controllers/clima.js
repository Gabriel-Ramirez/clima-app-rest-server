const { request, response } = require('express');

const clima = (request, response) => {
    response.json({
        temp: 32
    })

}

module.exports = {
    clima
}