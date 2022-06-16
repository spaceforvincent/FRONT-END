// import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'


export default {
  // namespaced: true,

  state: {
    //서버에서 받은 토큰,  localStorage에서 가져오기
    token: localStorage.getItem('token') || '',   
    // 현재 접속한 사용자 dj_rest_auth  accounts/user/
    currentUser: {},
    profile: {},
    authError: null,  // signup이나 login 할때 오류메시지를 받는다.
  },

  getters: {
    currentUser: state => state.currentUser,
    profile: state => state.profile,
    authError: state => state.authError,
    isLoggedIn: state => !!state.token,
  },

  mutations: {
    SET_TOKEN: (state, token) => state.token= token,
    SET_CURRENTUSER:(state, user) => state.currentUser = user,
    SET_PROFILE:(state, profile) => state.profile = profile,
    SET_AUTH_ERROR: (state, error) => state.authError = error,
  },

  actions: {
    saveToken({ commit }, token) {
      /* 
      state.token 추가 
      localStorage에 token 추가
      */
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
      
    },

    removeToken({ commit }) {
      /* 
      state.token 삭제
      localStorage에 token 추가
      */
      commit('SET_TOKEN','')
      localStorage.setItem('token', '')
    },

    // login({ commit, dispatch }, credentials) {
    //   /* 
    //   POST: 사용자 입력정보를 login URL로 보내기
    //     성공하면
    //       응답 토큰 저장
    //       현재 사용자 정보 받기
    //       메인 페이지(ArticleListView)로 이동
    //     실패하면
    //       에러 메시지 표시
    //   */
    // },

    signup(context, credentials) {
      /* 
      POST: 사용자 입력정보를 signup URL로 보내기
        성공하면
          응답 토큰 저장
          현재 사용자 정보 받기
          메인 페이지(ArticleListView)로 이동
        실패하면
          에러 메시지 표시
      */
      axios({
        url: drf.accounts.signup(),
        method: 'post',
        data: credentials,
      })
        .then(res=>{
          console.log(res.data)
        })
      
    },

    // logout({ getters, dispatch }) {
    //   /* 
    //   POST: token을 logout URL로 보내기
    //     성공하면
    //       토큰 삭제
    //       사용자 알람
    //       LoginView로 이동
    //     실패하면
    //       에러 메시지 표시
    //   */
    // },

    // fetchCurrentUser({ commit, getters, dispatch }) {
    //   /*
    //   GET: 사용자가 로그인 했다면(토큰이 있다면)
    //     currentUserInfo URL로 요청보내기
    //       성공하면
    //         state.cuurentUser에 저장
    //       실패하면(토큰이 잘못되었다면)
    //         기존 토큰 삭제
    //         LoginView로 이동
    //   */
    // },

    // fetchProfile({ commit, getters }, { username }) {
    //   /*
    //   GET: profile URL로 요청보내기
    //     성공하면
    //       state.profile에 저장
    //   */
    // },
  },
}
