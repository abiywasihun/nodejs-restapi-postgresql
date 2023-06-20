module.exports = (sequelize, DataTypes, Model) => {

    class Users extends Model {}

    Users.init({
        // Model attributes are defined here
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        phoneNumber: {
          type: DataTypes.STRING,
          allowNull: false
        },
        passowrd: {
          type: DataTypes.STRING,
          allowNull: false
        },
        isVendor: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
        companyName: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        tinNumber: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        documentPath: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        bussinessCategory: {
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
        modelName: 'users' // We need to choose the model name
      });
      
      return Users;
}