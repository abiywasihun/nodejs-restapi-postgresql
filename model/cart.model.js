module.exports = (sequelize, DataTypes, Model) => {

    class Carts extends Model {}

    Carts.init({
        // Model attributes are defined here
        userId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        serviceId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        status: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        startDate: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        endDate: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        createdDate: {
          type: DataTypes.DATE
          // allowNull defaults to true
        },
        updatedDate: {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        createdBy: {
            type: DataTypes.STRING,
        },
        updatedBy: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'carts' // We need to choose the model name
      });
      
      return Carts;
}