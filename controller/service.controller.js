const servicesService  = require('../service/services.service');
const logger = require('../logger/api.logger');

class ServiceController {

    async getServices() {
        logger.info('Controller: getServices')
        return await servicesService.getServices();
    }
    async getService(service){
        logger.info('Controller: getService', service);
        return await servicesService.getService(service);        
    }
    async getServiceById(serviceId){
        logger.info('Controller: getServiceById', serviceId);
        return await servicesService.getServiceById(serviceId);        
    }
    async createService(service) {
        logger.info('Controller: createService', service);
        return await servicesService.createService(service);
    }

    async updateService(service) {
        logger.info('Controller: updateService', service);
        return await servicesService.updateService(service);
    }

    async deleteService(serviceId) {
        logger.info('Controller: deleteService', serviceId);
        return await servicesService.updateService(serviceId);
    }
}
module.exports = new ServiceController();