const cartRepository  = require('../repository/cart.repository');

class CartService {

    constructor() {}

    async getCarts() {
        return await cartRepository.getCarts();
    }

    async getCart(cart){
        return await cartRepository.getCart(cart);
    }

    async getCartsByUserId(cart){
        return await cartRepository.getCartsByUserId(cart);
    }

    async getCartById(cartId){
        return await cartRepository.getCartById(cartId);        
    }

    async createCart(cart) {
        return await cartRepository.createCart(cart);
    }

    async updateCart(cart) {
        return await cartRepository.updateCart(cart);
    }

    async deleteCart(cartId) {
        return await cartRepository.deleteCart(cartId);
    }

}

module.exports = new CartService();