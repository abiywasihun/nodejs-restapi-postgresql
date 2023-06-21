const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');
const { Op } = require("sequelize");


class CartRepository {


    constructor(db = {}) {
        this.db = connect();
        // // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getCarts() {
        
        try {
            const carts = await this.db.carts.findAll({
                    include:[{
                      model: this.db.services,
                      as: 'service'
                    }]
                });
            console.log('carts:::', carts);
            return carts;
        } catch (err) {
            console.log(err);
            return [];
        }
    }


    async getCartById(cartId){
        
        try {
            const cart = await this.db.carts.findOne({
              where: { 
                id:cartId
                }}) 
            console.log('cart:::', cart);
            return cart;
        } catch (err) {
            console.log(err);
            return {};
        }       
    }
    async getCartsByUserId(cart){
        const {userId,serviceType}=cart
        try {
            const carts = await this.db.carts.findAll({
                    include:[{
                      model: this.db.services,
                      where: { userId } 
                    }],
                    where: {
                        serviceType,
                        'status': { [Op.ne]: 'draft'}
                    }
                });
            console.log('carts:::', carts);
            return carts;
        } catch (err) {
            console.log(err);
            return [];
        }

    }
    async getCart(cart){
        
        try {
            const carts = await this.db.carts.findAll({
                include:[{
                      model: this.db.services,
                      as: 'service'
                }],
              where: { 
                ...cart
                }}) 
            console.log('carts:::', carts);
            return carts;
        } catch (err) {
            console.log(err);
            return [];
        }

    }

    async createCart(cart) {
        let data = {};
        try {
            data = await this.db.carts.create(cart);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateCart(cart) {
        let data = {};
        try {
            cart.updatedDate = new Date().toISOString();
            data = await this.db.carts.update({...cart}, {
                where: {
                    id: cart.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteCart(cartId) {
        let data = {};
        try {
            data = await this.db.carts.destroy({
                where: {
                    id: cartId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new CartRepository();