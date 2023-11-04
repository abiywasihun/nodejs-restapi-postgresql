module.exports = (sequelize, DataTypes, Model) => {

    class Services extends Model {}

    Services.init({
        // Model attributes are defined here
        companyName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        location: {
          type: DataTypes.STRING,
          allowNull: false
        },
        contact: {
          type: DataTypes.STRING,
          allowNull: false
        },
        userId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        UploadPicturesVideos: {
          type: DataTypes.TEXT
          // allowNull defaults to true
        },
        Price: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        discountPrice: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        description: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        facebook: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        telegram: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        instagram: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        serviceType: {
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
        modelName: 'services' // We need to choose the model name
      });
      
      return Services;
}