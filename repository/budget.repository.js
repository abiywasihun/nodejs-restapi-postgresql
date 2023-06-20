const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class BudgetRepository {

    db = {};

    constructor() {
        this.db = connect();
        // // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getBudgets() {
        
        try {
            const budgets = await this.db.budget.findAll();
            console.log('budgets:::', budgets);
            return budgets;
        } catch (err) {
            console.log(err);
            return [];
        }
    }


    async getBudgetById(budgetId){
        
        try {
            const budget = await this.db.budget.findOne({
              where: { 
                id:budgetId
                }}) 
            console.log('budget:::', budget);
            return budget;
        } catch (err) {
            console.log(err);
            return {};
        }       
    }
    async getBudget(budget){
        
        try {
            const budgets = await this.db.budget.findAll({
              where: { 
                ...budget
                }}) 
            console.log('budgets:::', budgets);
            return budgets;
        } catch (err) {
            console.log(err);
            return [];
        }

    }

    async createBudget(budget) {
        let data = {};
        try {
            data = await this.db.budget.create(budget);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateBudget(budget) {
        let data = {};
        try {
            budget.updatedDate = new Date().toISOString();
            data = await this.db.budget.update({...budget}, {
                where: {
                    id: budget.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteBudget(budgetId) {
        let data = {};
        try {
            data = await this.db.budget.destroy({
                where: {
                    id: budgetId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new BudgetRepository();