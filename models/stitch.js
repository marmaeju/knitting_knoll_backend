'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Stitch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Stitch.hasOne(models.Tutorial, { foreignKey: 'stitch_id' })
    }
  }
  Stitch.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Stitch',
      tableName: 'stitches'
    }
  )
  return Stitch
}
