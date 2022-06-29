import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      user: {}
    }
  },
  mutations: {
    user(state, data) {
      state.user = data
    }
  }
})

export default store
