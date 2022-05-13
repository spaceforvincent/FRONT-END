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

  ```vue
  //todoListItem.vue
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

  

- Getters

  - 완료된 todo 개수 계산

  ```javascript
  //index.js
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
        allTodoCount: function (state) {
        return state.todos.length
      },
      },
  ```

  ```vue
  //App.vue
  <template>
    <div id="app">
      <h1> Todo List</h1>
      <h2> Completed Todos : {{ completedTodosCount }} </h2>
      <h2> Uncompleted Todos : {{ uncompletedTodosCount }} </h2>
      <todo-list></todo-list>
      <todo-form></todo-form>
    </div>
  </template>
  
  <script>
  import TodoList from '@/components/TodoList.vue'
  import TodoForm from '@/components/TodoForm.vue'
  
  export default {
    name: 'App',
    components: {
      TodoList,
      TodoForm,
    },
    computed: {
      completedTodosCount: function() {
        return this.$store.getters.completedTodosCount
      },
      uncompletedTodosCount: function() {
        return this.$store.getters.uncompletedTodosCount
      },
  
    }
  }
  ```

  

### component binding helper

- mapState

  - computed와 store의 state를 매핑
  - 매핑된 computed의 이름이 state 이름과 같을 때 문자열 배열을 전달할 수 있음

  ```vue
  //todoList.vue
  
  computed: {
          todos: function() {
              return this.$store.state.todos
          }
      }
  
  //////////////////////////////////////////////////////////////////
  
  //todoList.vue
  import { mapState } from 'vuex'
  
  computed: mapState([
  	'todos', #computed의 내용이 중앙의 state로 넘어감
  ])
  
  //////////////////////////////////////////////////////////////////
  //하지만 다른 computed 값을 함께 사용할 수 없기 때문에 최종 객체를 computed에 전달할 수 있도록 다음과 같이 객체 전개 연산자로 객체를 복사하여 작성
  computed: {
  	...mapState([
  	'todos'
  	])
  }
  ```

  

- mapGetters

  - computed와 getters를 매핑
  - getters를 객체 전개 연산자로 계산하여 추가

  ```
  //App.vue
  
  computed: {
      completedTodosCount: function() {
        return this.$store.getters.completedTodosCount
      },
      uncompletedTodosCount: function() {
        return this.$store.getters.uncompletedTodosCount
      },
      allTodosCount: function() {
        return this.$store.getters.allTodosCount
      }
    }
  ///////////////////////////////////////////////////////////////////
  
  import { mapState } from 'vuex'
  
  computed: {
      // mapGetters 안에 정의한 메서드 중에서 아래 3개만 가져와서 Array에 추가
      ...mapGetters([
        'completedTodosCount',
        'uncompletedTodosCount',
        'allTodosCount',
      ])
    }
  ```

  

- mapActions

  - action을 전달하는 컴포넌트 method 옵션을 만듦
  - actions를 객체 전개 연산자로 계산하여 추가하기

  ```
  //TodoListItem.vue
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
  
  ////////////////////////////////////////////////////////////////////////////
  <template>
    <div>
        <div>
        <span 
        @click="updateTodoStatus(todo)"
        :class="{ 'is-completed' : todo.isCompleted}"
        >
        {{ todo.title }}
        </span>
        <button @click="deleteTodo(todo)">[X]</button>
    </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex'
  export default {
      name: 'TodoListItem',
      props: {
          todo: {
              type: Object,
          }
          
          },
          methods: {
              ...mapActions([
                  'deleteTodo',
                  'updateTodoStatus',
              ])
          }
      }
  </script>
  ```



