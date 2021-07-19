export const state = () => ({
    orders: [],
    order: null
})

export const getters = {
    getOrders: (state) => state.orders,
    getOrder: (state) => state.order
}

export const mutations = {
    setOrders: (state, orders) => {
        state.orders = orders
    },
    setOrder: (state, order) => {
        state.order = order
    }
}

export const actions = {
    async getAllOrders({ commit }) {
        try {
            const orders = await this.$axios.get('/api/order/')
            commit('setOrders', client.data.order)
        } catch (e) {
            return { error: error.message }
        }
    },

    async getMyOrders({ commit }, userid) {

    },

    async getOrder({ commit }, id) {
    },
    async createOrder({ commit }, order) {
        try {
            const orders = await this.$axios.post('/api/order/')
            return orders;
        } catch (e) {
            return { error: error.message }
        }
    },

    async updateOrder({ commit }, order) {

    }

}