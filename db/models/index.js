const {Usuario,userShema} = require('./usuario.model')
const {Planes,planesShema} = require('./planes.model')
const {Sessiones,sessionesShema} = require('./sessionChat.model')
const {Interacciones,interaccionesShema} = require('./interacciones.model')


function setupModels(sequelize){  // recibe la conexion // y haga un init
    Usuario.init(userShema,Usuario.config(sequelize)) // recebe el sequelize
    Planes.init(planesShema,Planes.config(sequelize))
    Sessiones.init(sessionesShema,Sessiones.config(sequelize))
    Interacciones.init(interaccionesShema,Interacciones.config(sequelize))


    //ASOSSIASIONES

    Usuario.associate(sequelize.models)
    Planes.associate(sequelize.models)
    Sessiones.associate(sequelize.models)
    Interacciones.associate(sequelize.models)
  }



module.exports = setupModels
