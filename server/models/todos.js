'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Todos.belongsTo(models.Users, {
        foreignKey: 'users_id',
      });
    }
  }
  Todos.init({
    users_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: { model: 'Users', key: 'id' },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Todos',
  });
  return Todos;
};