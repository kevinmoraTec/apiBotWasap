const boom = require('@hapi/boom');
//const sequelize = require('../libs/sequelize')
const { models } = require('./../libs/sequelize');

const SessioData = require('./sessiones.users.service')
const serviceSession = new SessioData()
//git remote set-url origin https://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@github.com/kevinmoraTec/botWatsap.git
class InteraccionesService {
  constructor(){}


  async crearInteraccion(data){
    console.log(',E llega la info pata Crear');
    console.log('Interaciones');
    console.log(data);

       const serviceData = await serviceSession.crearSession(data.data.response.idUsuario)
       console.log('SE CRE LA DATA');
       console.log(serviceData.idSession);

       const objectFinal = {
        idSession:serviceData.idSession,
        preguntaUsuario:data.data.prompt,
        respuestaModelo:data.apiRta.data.choices[0].text
       }

    const dataNew = await models.Interacciones.create(objectFinal)
    return dataNew
  }
}


module.exports=InteraccionesService
