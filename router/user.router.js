const serviceUsuarioUser = require('../services/user.service');
const serviceUsuario = new serviceUsuarioUser();
const express = require('express');
const router = express.Router();
// const {Configuration,OpenAIApi} = require('openai')
const { config } = require('../config/config');
const axios = require('axios');
const { Configuration, OpenAIApi } = require("openai");
const Interacciones = require('../services/interacciones.service')
const serviceInteracciones = new Interacciones()

const configuration = new Configuration({
  apiKey: config.key_openIA,
});
const openai = new OpenAIApi(configuration);


// const cofiguracion = new Configuration({
//     apiKey:config.key_openIA
// })

// const openIa = new OpenAIApi(cofiguracion)

const validatorHanlder = require('../middleware/validator.handler');

const { createUserShema } = require('../schemas/user.schema');

router.get('/', async (req, res) => {
  const data = await serviceUsuario.findAll();
  res.json(data);
});

router.post('/data', async (req, res, next) => {
  try {


    // const completion = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: "Hello world",
    // });
    // console.log(completion.data.choices[0].text);


    const data = req.body;
    console.log('La data que me llega Cjapi');
    console.log(data);

    const userData = await serviceUsuario.findChapi(data.prompt);
    serviceInteracciones.crearInteraccion({data,apiRta:userData})
    console.log('RespuestaChat');
    console.log(userData.data.choices[0].text);
    res.json(userData.data.choices[0].text);
  } catch (error) {
    next(error);
  }
});

router.get('/arrary', async (req, res) => {
  const { limit, ouset } = req.query;

  for (let index = 1; index <= limit; index++) {
    // const element = limit[index];
    console.log(ouset);
  }
  res.send('OKEY');
});

router.post(
  '/add',
  validatorHanlder(createUserShema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;

      const dataReturn = await serviceUsuario.create(data);
      res.json(dataReturn);
    } catch (error) {
      next(error);
    }
  }
);
router.get('/:telefonoNumero', async (req, res, next) => {
  try {
    const { telefonoNumero } = req.params;
    console.log(telefonoNumero);

    const dataTelefono = await serviceUsuario.findOneTelefono(telefonoNumero);
    console.log('me retorna ');
    console.log(dataTelefono);
    res.json(dataTelefono);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
