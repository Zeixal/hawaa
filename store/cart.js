let store = require('store')
export const state = () => ({
    allProducts: [],
    featuredProducts: [],
    cartItems: [],
})


export const getters = {
    /* 
      return items from store
    */
    allProducts: (state) => state.allProducts,
    featuredProducts: (state) => state.featuredProducts,
    dishProducts: (state) => state.dishProducts,
    drinkProducts: (state) => state.drinkProducts,
    getCart: (state) => state.cartItems,
    getTotalItemPrice: (state) => (id) => state.cartItems[id].price * state.cartItems[id].quantity,
    getCartTotal: (state) =>
        state.cartItems.length < 1
            ? '0'
            : state.cartItems
                .map((el) => el.price * el.quantity)
                .reduce((a, b) => a + b),
}
export const mutations = {
    removeItem: (state, item) => {
        let id = state.cartItems.findIndex(x => x._id == item._id)
        state.cartItems.splice(id, 1)
    },
    setProducts: (state, products) => (state.allProducts = products),
    setFeaturedProducts: (state, products) => (state.featuredProducts = products),
    setDishProducts: (state, products) => (state.dishProducts = products),
    setDrinkProducts: (state, products) => (state.drinkProducts = products),
    setCartItems: (state, cart) => state.cartItems = cart,
    setCartItem: (state, item) => {

        if (state.cartItems.filter(i => i._id == item._id).length == 0) {
            item.quantity = 1
            console.log(item)
            state.cartItems.push(item)
            store.set('cart', state.cartItems)

        } else {
            let index = state.cartItems.findIndex(x => x._id == item._id)
            console.log(index)
            console.log(state.cartItems[index])
            state.cartItems[index].quantity++
        }
    },
    removeCartItem: (state, id) =>
        state.cartItems.splice(
            state.cartItems.findIndex((el) => el.id === id),
            1
        ),
}

export const actions = {
    async addItemToCart({ commit }, cartItem) {
        await commit('setCartItem', cartItem)
    },
    async deleteCartItem({ commit }, id) {
        await commit('removeCartItem', id)
    },
    async addCart({ commit }, cart) {
        await commit('setCartItems', cart)
    }
}