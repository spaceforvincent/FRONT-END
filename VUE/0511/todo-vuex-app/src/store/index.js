import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //data
    todos: [
      {
        title: '점심먹기', 
        isCompleted: false, 
        date: new Date().getTime()
      },
      {
        title: 'vuex 복습하기', 
        isCompleted: false,
        date: new Date().getTime() + 1
      },

    ]
  },
  getters: { //computed
    completedTodosCount: function(state) {
      return state.todos.filter(todo => {
        return todo.isCompleted === true
      }).length
    },
    uncompletedTodosCount: function(state) {
      return state.todos.filter(todo => {
        return todo.isCompleted === false
      }).length
    },
  
  },
  mutations: { //methods => change
    CREATE_TODO: function(state, todoItem){
      state.todos.push(todoItem)
    },
    DELETE_TODO: function(state, todoItem) {
      const index= state.todos.indexOf(todoItem)
      state.todos.splice(index, 1) //array의 인덱스에 있는 요소를 하나만 제거
    },
    UPDATE_TODO_STATUS: function(state,todoItem) {
      state.todos = state.todos.map(todo => {
        if(todo === todoItem) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    }
  },
  actions: { //methods => !change
    createTodo: function(context, todoItem) {
      context.commit('CREATE_TODO', todoItem)
    },
    deleteTodo: function(context, todoItem) {
      context.commit('DELETE_TODO', todoItem)
    },
    updateTodoStatus: function(context, todoItem) {
      context.commit('UPDATE_TODO_STATUS', todoItem)
    }
  },
})
