const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class ServiceRepository {


    constructor(db = {}) {
        this.db = connect();
        // // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getServices() {
        
        try {
            const services = await this.db.services.findAll();
            console.log('services:::', services);
            return services;
        } catch (err) {
            console.log(err);
            return [];
        }
    }


    async getServiceById(serviceId){
        
        try {
            const service = await this.db.services.findOne({
              where: { 
                id:serviceId
                }}) 
            console.log('service:::', service);
            return service;
        } catch (err) {
            console.log(err);
            return {};
        }       
    }
    async getService(service){
        
        try {
            const { serviceType } = service
            const services = await this.db.services.findAll({
              where: { 
                serviceType
                }}) 
            console.log('services:::', services);
            return services;
        } catch (err) {
            console.log(err);
            return [];
        }

    }

    async createService(service) {
        let data = {};
        try {
            data = await this.db.services.create(service);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateService(service) {
        let data = {};
        try {
            service.updatedDate = new Date().toISOString();
            data = await this.db.services.update({...service}, {
                where: {
                    id: service.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteService(serviceId) {
        let data = {};
        try {
            data = await this.db.services.destroy({
                where: {
                    id: serviceId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new ServiceRepository();