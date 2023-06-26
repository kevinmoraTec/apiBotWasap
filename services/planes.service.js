const boom = require('@hapi/boom');
//const sequelize = require('../libs/sequelize')
const { models } = require('./../libs/sequelize');


class PlanesService {

  constructor(){}

  async crearPlan (data){
    const [row,created] = await models.Planes.findOrCreate({
      where:{titulo:data.titulo},
      defaults:data
    })
    console.log(created);
    return row
  }


  async verificarDataUSerPlan(id){
    const idUSerPlan = await models.Planes.findOne({
      where:{idUsuario:id}
    })
    if (!idUSerPlan) {
      return false
    }
    return idUSerPlan
  }


  async findOneId(id){
    const idDataPlan = await models.Planes.findByPk(id)

    if (!idDataPlan) {
      return false
    }
    return idDataPlan
  }

}


module.exports = PlanesService
