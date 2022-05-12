# todos

- 프로젝트 준비

 ```
 vue create todo-vuex-app
 
 cd todo-vuex-app
 
 vue add vuex
 
 commit 여부 -> yes
 ```



- create todo

  - state에 2개의 todo 작성

  ```javascript
  //index.js
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
  
  ```

  - 컴포넌트에서 Vuex Store의 state에 접근
    - $store.state

  ```html
  //TodoList.vue
  <template>
    <div>
        <todo-list-item 
        v-for="todo in todos"
        :key="todo.date"
        ></todo-list-item>
    </div>
  </template>
  ```

  ```javascript
  <script>
  import TodoListItem from '@/components/TodoListItem.vue'
  export default {
      name:'TodoList',
      components: {
          TodoListItem,
      },
      //현재 state의 todo는 값이 변화하는 것이 아님
      //store에 저장된 todo 목록을 가져오는 것이기 때문에 매번 새로 호출하는 것은 비효율적
      //대신 todo가 추가 되는 등의 변경사항이 있을 때만 새로 계산한 값을 반환하는 방향으로 변경
      computed: { 
          todos: function() {
              return this.$store.state.todos
          }
      }
  }
  </script>
  
  <style>
  
  </style>
  ```

  

  - pass props (TodoList -> TodoListItem)

  ```html
  //TodoList.vue
  <template>
    <div>
        <todo-list-item 
        v-for="todo in todos"
        :key="todo.date"
        :todo="todo"
        ></todo-list-item>
    </div>
  </template>
  ```

  ```vue
  // TodoListItem.vue
  <template>
    <div>
         
        {{ todo.title }}
        
    </div>
  </template>
  
  <script>
  export default {
      name: 'TodoListItem',
      props: {
          todo: {
              type: Object,
          }
          
          },
      }
  </script>
  
  <style>
      
  </style>
  ```

  - Actions & Mutations
    - CreateTodo 메서드를 통해 createTodo Action 함수 호출

  ```vue
  //todoform.vue
  <template>
    <div>
        <input type="text"
        v-model.trim="todoTitle"
        @keyup.enter="createTodo"
        >
        <button @click="createTodo">Add</button>
    </div>
  </template>
  
  <script>
  
  export default {
      name:'TodoForm',
      data: function() {
          return {
              todoTitle:'',
          }
      },
      method: {
        createTodo: function() {
              const todoItem = {
                  title: this.todoTitle,
                  isCompleted: false,
                  date: new Date().getTime(),
              }
              if (todoItem.title) {
              this.$store.dispatch('createTodo', todoItem) //createTodo Action 함수 호출
          }
          this.todoTitle = '' //빈값이 들어가면 안넘어가도록
          }
      }   
  }
  </script>
  
  <style>
  
  </style>
  ```

  ```javascript
  //index.js
  export default new Vuex.Store({
    state: { //data
      todos: [],
    },
  	mutations: { //methods => change
      CREATE_TODO: function(state, todoItem){
        state.todos.push(todoItem)
      },
    },
    actions: { //methods => !change
      createTodo: function(context, todoItem) {
        context.commit('CREATE_TODO', todoItem)
      },
    },
  ```

  

- Delete Todo

  - deleteTodo action 함수 호출

  ```vue
  // TodoListItem.vue
  <template>
    <div>
         
        {{ todo.title }}
        <button @click="deleteTodo">[X]</button>
    </div>
  </template>
  
  <script>
  export default {
      name: 'TodoListItem',
      props: {
          todo: {
              type: Object,
          }
          
          },
      methods: {
              deleteTodo: function() {
                  this.$store.dispatch('deleteTodo', this.todo)
              },
          }
      }
      }
  </script>
  
  <style>
      
  </style>
  ```

  ```javascript
  //index.js
  
   actions: { //methods => !change
      createTodo: function(context, todoItem) {
        context.commit('CREATE_TODO', todoItem)
      },
      deleteTodo: function(context, todoItem) {
        context.commit('DELETE_TODO', todoItem)
      },
   }
  
   mutations: { //methods => change
      CREATE_TODO: function(state, todoItem){
        state.todos.push(todoItem)
      },
      DELETE_TODO: function(state, todoItem) {
        const index= state.todos.indexOf(todoItem)
        state.todos.splice(index, 1) //array의 인덱스에 있는 요소를 하나만 제거
      },
    },
  ```

  

- update todo

  - updateTodoStatus action 함수 호출

  ```
  //todoListItem.vue
  <template>
    <div>
        <span 
        @click="updateTodoStatus"
        :class = "{'is-completed' : todo.isCompleted}"
        >{{ todo.title }}
        </span>
        <button @click="deleteTodo">[X]</button>
    </div>
  </template>
  
  <script>
  export default {
      name: 'TodoListItem',
      props: {
          todo: {
              type: Object,
          }
          
          },
          methods: {
              deleteTodo: function() {
                  this.$store.dispatch('deleteTodo', this.todo)
              },
              updateTodoStatus: function() {
                  this.$store.dispatch('updateTodoStatus', this.todo)
              }
          }
      }
  </script>
  
  <style scope>
      .is-completed {
          text-decoration:"line-through"
      }
  </style>
  ```

  ```javascript
  //index.js
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
  ```

  - 취소선 긋기

  ```
  <template>
    <div>
        <div>
        <span 
        @click="updateTodoStatus"
        :class="{ 'is-completed' : todo.isCompleted}"
        >
        {{ todo.title }}
        </span>
        <button @click="deleteTodo">[X]</button>
    </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'TodoListItem',
      props: {
          todo: {
              type: Object,
          }
          
          },
          methods: {
              deleteTodo: function() {
                  this.$store.dispatch('deleteTodo', this.todo)
              },
              updateTodoStatus: function() {
                  this.$store.dispatch('updateTodoStatus', this.todo)
              }
          }
      }
  </script>
  
  <style scoped>
      .is-completed {
          text-decoration:line-through;
      }
  </style>
  ```

  