const userService  = require('../service/user.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getUsers() {
        logger.info('Controller: getUsers')
        return await userService.getUsers();
    }

    async createUser(user) {
        logger.info('Controller: createUser', user);
        return await userService.createUser(user);
    }

    async loginUser(user){
        logger.info('Controller: loginUser', user);
        return await userService.loginUser(user);
    }

    async updateUser(user) {
        logger.info('Controller: updateUser', user);
        return await userService.updateUser(user);
    }

    async deleteUser(userId) {
        logger.info('Controller: deleteUser', userId);
        return await userService.deleteUser(userId);
    }
}
module.exports = new TodoController();