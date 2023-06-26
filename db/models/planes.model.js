const { Model, DataTypes, Sequelize } = require('sequelize');

const planesTabla = 'planes';

const planesShema = {
  idPlan: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  descripcion:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  titulo:{
    allowNull: false,
    type: DataTypes.STRING,
    unique:true
  },
    precio:{
allowNull: false,
type: DataTypes.DECIMAL,
},
estado: {
  type: DataTypes.BOOLEAN,
  allowNull: false,
  defaultValue: true
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at'
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at'
  }

};


class Planes extends Model { // Tiene todas las formas para hacer Querys con esta extencion
    static associate(models){
      this.belongsTo(models.Usuario,{
        foreignKey:'idUsuario'
      })
    }

    static config(sequelize){
        return {
            sequelize, // laconccion que va a tener
            tableName:planesTabla, // nombre de la tabla
            modelName:'Planes', // nombre del modelo

        }
    }
}

module.exports = {planesTabla,planesShema,Planes}
