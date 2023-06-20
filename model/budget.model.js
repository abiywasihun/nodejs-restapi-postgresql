module.exports = (sequelize, DataTypes, Model) => {

    class Budget extends Model {}

    Budget.init({
        // Model attributes are defined here
        userId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        cake: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        venue: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        decoration: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        car: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        catering: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        dress: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        dj: {
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
        modelName: 'budget' // We need to choose the model name
      });
      
      return Budget;
}
