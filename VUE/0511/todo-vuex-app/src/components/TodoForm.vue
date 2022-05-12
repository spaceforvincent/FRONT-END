
<template>
  <div>
      <input type="text"
      v-model.trim="todoTitle"
      @keyup.enter="createTodo"
      />
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
    methods: {
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
        },
    },   
}
</script>

<style>

</style>