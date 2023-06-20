const serviceRepository  = require('../repository/service.repository');

class ServicesService {

    constructor() {}

    async getServices() {
        return await serviceRepository.getServices();
    }

    async getService(service){
        return await serviceRepository.getService(service);
    }

    async getServiceById(serviceId){
        return await serviceRepository.getServiceById(serviceId);        
    }
    
    async createService(service) {
        return await serviceRepository.createService(service);
    }

    async updateService(service) {
        return await serviceRepository.updateService(service);
    }

    async deleteService(serviceId) {
        return await serviceRepository.deleteService(serviceId);
    }

}

module.exports = new ServicesService();