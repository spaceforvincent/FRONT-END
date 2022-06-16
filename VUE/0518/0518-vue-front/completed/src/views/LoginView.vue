<template>
  <div>
    <h1>Login</h1>

    <form>
      <div>
        <label for="username">username: </label>
        <input type="text" id="username" required />
      </div>

      <div>
        <label for="password">password: </label>
        <input type="password" id="password" required />
      </div>

      <button>Login</button>
    </form>
  </div>
</template>

<script>
  // import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'LoginView',
    computed: {},
    methods: {},
  }
</script>

<style></style>
