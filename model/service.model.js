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
        cakeType: {
          type: DataTypes.STRING,
          // allowNull: false
        },
        cakeSize: {
          type: DataTypes.STRING,
          // allowNull: false
        },
        cakeFlavour: {
          type: DataTypes.STRING,
          // allowNull: false
        },
        brideGroomCarType: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        bridesmaidCarType: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        venueTypes: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        venuePackages: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        venueServiceOffering: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        guestCapacity: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        cateringPackages: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        cateringServingCapacity: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        decorationPackages: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        decorationAccommodation: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        djBandPackages: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        stagePerformanceTime: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        instruments: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        musicGenres: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        bridalCollections: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        bridalCollectionsModern: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        bridalCollectionsTraditional: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        bridalDressSize: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        photographyPackages: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        themeColour: {
          type: DataTypes.STRING
          // allowNull defaults to true
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
        serviceType: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        other: {
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