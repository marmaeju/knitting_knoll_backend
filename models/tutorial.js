'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Tutorial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tutorial.belongsTo(models.Cast, { foreignKey: 'cast_id' })
      Tutorial.belongsTo(models.Stitch, { foreignKey: 'stitch_id' })
    }
  }
  Tutorial.init(
    {
      cast_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'casts',
          key: 'id'
        }
      },
      stitch_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'stitches',
          key: 'id'
        }
      },
      link: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Tutorial',
      tableName: 'tutorials'
    }
  )
  return Tutorial
}
