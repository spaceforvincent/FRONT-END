<template>
  <div>
      <span 
      class = "abc"
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