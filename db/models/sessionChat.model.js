const { Model, DataTypes, Sequelize } = require('sequelize');

const sessionesTabla = 'sessionChatsContexto';

const sessionesShema = {
  idSession: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: 'usuarios', // nombre de la tabla
      key: 'idUsuario'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  fechaInicio: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  fechaFin: {
    allowNull: false,
    type: DataTypes.DATE,
  }
};


class Sessiones extends Model { // Tiene todas las formas para hacer Querys con esta extencion
    static associate(models){
      this.belongsTo(models.Usuario,{
        as:'sessiones',
        foreignKey:'idUsuario'
      })
      this.hasMany(models.Interacciones,{
        as:'interacciones',
        foreignKey:'idSession'
      })
    }

    static config(sequelize){
        return {
            sequelize, // la conccion que va a tener
            tableName:sessionesTabla, // nombre de la tabla
            modelName:'Sessiones', // nombre del modelo
            timestamps:false
        }
    }
}

module.exports = {sessionesTabla,sessionesShema,Sessiones}
