const budgetRepository  = require('../repository/budget.repository');

class BudgetService {

    constructor() {}

    async getBudgets() {
        return await budgetRepository.getBudgets();
    }

    async getBudget(budget){
        return await budgetRepository.getBudget(budget);
    }

    async getBudgetById(budgetId){
        return await budgetRepository.getBudgetById(budgetId);        
    }

    async createBudget(budget) {
        return await budgetRepository.createBudget(budget);
    }

    async updateBudget(budget) {
        return await budgetRepository.updateBudget(budget);
    }

    async deleteBudget(budgetId) {
        return await budgetRepository.deleteBudget(budgetId);
    }

}

module.exports = new BudgetService();