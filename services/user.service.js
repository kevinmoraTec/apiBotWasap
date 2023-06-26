const boom = require('@hapi/boom');
//const sequelize = require('../libs/sequelize')
const { models } = require('./../libs/sequelize');
const { config } = require('../config/config');
const axios = require('axios');
const { Configuration, OpenAIApi } = require("openai");


class ServiceUser {
  constructor() {}

  async create(data) {
    const createData = await models.Usuario.create(data);
    return createData;
  }
  async findAll() {
    const allData = await models.Usuario.findAll();
    return allData;
  }

  async findOneTelefono(telefono) {
    const telefonoFormat = this.quitarCodigoPaisYAgregarCero(telefono);
    console.log('Telefono Formateao');
    console.log(telefonoFormat);

    const userTelefono = await models.Usuario.findOne({
      where: { telefono: telefonoFormat },
    });
    if (!userTelefono) {
      return false;
    }
    return userTelefono;
  }

  quitarCodigoPaisYAgregarCero(numero) {
    var codigoPais = '593';
    if (numero.startsWith(codigoPais)) {
      return '0' + numero.substring(codigoPais.length);
    }
    return numero;
  }

  async findChapi(data) {
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: data,
  temperature: 0.9,
  max_tokens: 150,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.6,
  stop: [" Human:", " AI:"],
});

return response
// const response = await axios.post(
//     "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest",
//     data,
//     {
//         headers: { Authorization: `Bearer ${config.keyHuginFace}` },
//     }
// );
// return response.data;

  }

  // Busca 'numeroRecibido' en la base de datos.
}

module.exports = ServiceUser;
