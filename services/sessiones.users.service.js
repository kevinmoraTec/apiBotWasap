const boom = require('@hapi/boom');
//const sequelize = require('../libs/sequelize')
const { models } = require('./../libs/sequelize');

// Importar la librería moment-timezone
const moment = require('moment-timezone');

class Sessiones {
  constructor() {}

  async crearSession(idUsuario) {
    const newData = this.calcularhoras(idUsuario);

    const lastRecord = await this.findUltimaSession();
    const fechaFinUltimaSesion = moment(lastRecord.fechaFin);

    let ahora = moment().tz('America/Guayaquil');

    if (ahora.isBefore(fechaFinUltimaSesion)) {
      console.log('La hora actual aún no ha pasado la hora de finalización.');
      // Aquí puedes agregar la lógica que desees en caso de que la hora actual aún no haya pasado la hora de finalización
      return lastRecord
    } else {
      console.log('La hora actual ha pasado la hora de finalización.');
      // Aquí puedes agregar la lógica que desees en caso de que la hora actual ya haya pasado la hora de finalización
      const [row, created] = await models.Sessiones.findOrCreate({
        where: { fechaFin: newData.fechaInicio },
        defaults: newData,
      });
      return row;
    }
  }

  async findUltimaSession() {
    const lastRecord = await models.Sessiones.findOne({
      order: [
        ['fechaInicio', 'DESC']
      ]
    });
    console.log('La ultima fecha: ', lastRecord.fechaFin);
    return lastRecord;
  }

  calcularhoras(idUsuario) {
    // Obteniendo la fecha y hora actual en la zona horaria de Ecuador
    let fechaInicio = moment().tz('America/Guayaquil');

    // Creando un nuevo objeto moment para la fecha y hora de finalización
    let fechaFin = moment().tz('America/Guayaquil');

    // Calcular las horas restantes hasta el final del día
    let horasRestantes = 24 - fechaInicio.hour();

    // Configurar la hora de finalización para que sea al final del día
    fechaFin.add(horasRestantes, 'hours').minute(59).second(59).millisecond(999);

    return {
      idUsuario: idUsuario,
      fechaInicio: fechaInicio.format(),
      fechaFin: fechaFin.format(),
    };
  }
}


module.exports = Sessiones;
