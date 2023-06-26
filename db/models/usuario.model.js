const { Model, DataTypes, Sequelize } = require('sequelize');

const userTabla = 'usuarios';

const userShema = {
  idUsuario: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombres:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  email:{
    allowNull: false,
    type: DataTypes.STRING,
    unique:true
  },
  password:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  telefono:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at',
    defaultValue: Sequelize.NOW
  }

};


class Usuario extends Model { // Tiene todas las formas para hacer Querys con esta extencion
    static associate(models){
      this.hasOne(models.Planes,{
        as:'userPlanes',
        foreignKey:'idUsuario'
      })

      this.hasMany(models.Sessiones,{
        as:'sessiones',
        foreignKey:'idUsuario'
      })
    }

    static config(sequelize){
        return {
            sequelize, // laconccion que va a tener
            tableName:userTabla, // nombre de la tabla
            modelName:'Usuario', // nombre del modelo
            timestamps:true
        }
    }
}

module.exports = {userTabla,userShema,Usuario}
