const cartService  = require('../service/cart.service');
const logger = require('../logger/api.logger');

class CartController {

    async getCarts() {
        logger.info('Controller: getCarts')
        return await cartService.getCarts();
    }
    async getCart(cart){
        logger.info('Controller: getCart', cart);
        return await cartService.getCart(cart);        
    }
    async getCartsByUserId(cart){
        logger.info('Controller: getCartsByUserId', cart);
        return await cartService.getCartsByUserId(cart)
    }
    async getCartById(cartId){
        logger.info('Controller: getCartById', cartId);
        return await cartService.getCartById(cartId);        
    }
    async createCart(cart) {
        logger.info('Controller: createCart', cart);
        return await cartService.createCart(cart);
    }

    async updateCart(cart) {
        logger.info('Controller: updateCart', cart);
        return await cartService.updateCart(cart);
    }

    async deleteCart(cartId) {
        logger.info('Controller: deleteCart', cartId);
        return await cartService.updateCart(cartId);
    }
}
module.exports = new CartController();