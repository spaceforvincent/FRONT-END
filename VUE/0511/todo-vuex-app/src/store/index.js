import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //data
    todos: [],
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
    allTodosCount: function (state) {
      return state.todos.length
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
      //배열의 각 요소에 함수가 적용된 새로운 배열을 state.todos에 할당
      state.todos = state.todos.map(todo => {
        //선택된 todoitem과 현재 todos 요소 todo가 서로 일치하면
        if(todo === todoItem) {
          // isCompleted의 값을 변경한 새로운 object return
          return {
            ...todo, //객체 복사(기존 내용에서 iscompleted만 변경하기 위해 얕은 복사)
            isCompleted: !todo.isCompleted
        } 
      } else{
        //일치하지 않으면 기존 배열 return
        return todo
      }
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
