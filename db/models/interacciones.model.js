const { Model, DataTypes, Sequelize } = require('sequelize');

const interaccionesTabla = 'interacciones';

const interaccionesShema = {
  idInteraccion: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  idSession: {
    type: DataTypes.INTEGER,
    references: {
      model: 'sessionChatsContexto', // nombre de la tabla
      key: 'idSession'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  preguntaUsuario: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  respuestaModelo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fechaInteraccion: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
};


class Interacciones extends Model { // Tiene todas las formas para hacer Querys con esta extencion
    static associate(models){
      this.belongsTo(models.Sessiones,{
        foreignKey:'idSession'
      })
    }

    static config(sequelize){
        return {
            sequelize, // laconccion que va a tener
            tableName:interaccionesTabla, // nombre de la tabla
            modelName:'Interacciones', // nombre del modelo
            timestamps:false
        }
    }
}

module.exports = {interaccionesTabla,interaccionesShema,Interacciones}
