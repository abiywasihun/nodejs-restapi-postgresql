const budgetService  = require('../service/budget.service');
const logger = require('../logger/api.logger');

class BudgetController {

    async getBudgets() {
        logger.info('Controller: getBudgets')
        return await budgetService.getBudgets();
    }
    async getBudget(budget){
        logger.info('Controller: getBudget', budget);
        return await budgetService.getBudget(budget);        
    }
    async getBudgetById(budgetId){
        logger.info('Controller: getBudgetById', budgetId);
        return await budgetService.getBudgetById(budgetId);        
    }
    async createBudget(budget) {
        logger.info('Controller: createBudget', budget);
        return await budgetService.createBudget(budget);
    }

    async updateBudget(budget) {
        logger.info('Controller: updateBudget', budget);
        return await budgetService.updateBudget(budget);
    }

    async deleteBudget(budgetId) {
        logger.info('Controller: deleteBudget', budgetId);
        return await budgetService.updateBudget(budgetId);
    }
}
module.exports = new BudgetController();