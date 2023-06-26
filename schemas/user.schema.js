const Joi = require('joi')

const name = Joi.string()

const cedula = Joi.string()


const createUserShema = Joi.object({
    nombres:name.required(),
    email:cedula.required(),
    password:cedula.required(),
    telefono:cedula.required()
})


module.exports = {createUserShema}

