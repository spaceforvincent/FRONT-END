import Vue from 'vue'
import Vuex from 'vuex'

// 불러오기
import accounts from './modules/accounts'

Vue.use(Vuex)

export default new Vuex.Store({

  // 모듈에 추가하기
  modules: { accounts, },
})
