'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.belongsTo(models.User, {
        foreignKey: 'user_id',
        sourceKey: 'user_id',
        onUpdate: 'cascade',
        onDelete: 'cascade',
      });
      Album.hasMany(models.Photo, {
        foreignKey: 'album_id',
        sourceKey: 'album_id',
        onUpdate: 'cascade',
        onDelete: 'cascade',
      });
    }
  }
  Album.init(
    {
      album_id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Album',
      tabelName: 'Album',
    },
  );
  return Album;
};
