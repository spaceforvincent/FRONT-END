<template>
  <div>
      <todo-list-item 
      v-for="todo in todos"
      :key="todo.date"
      :todo="todo"
      ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue'
export default {
    name:'TodoList',
    components: {
        TodoListItem,
    },
    computed: {
        todos: function() {
            return this.$store.state.todos
        }
    }
}
</script>

<style>

</style>