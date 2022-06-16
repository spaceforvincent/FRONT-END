<template>
  <div>
    <h1>Signup</h1>

    <form>
      <div>
        <label for="username">Username: </label>
        <input type="text" id="username" required />
      </div>
      <div>
        <label for="password1">Password: </label>
        <input type="password" id="password1" required />
      </div>
      <div>
        <label for="password2">Password Confirmation:</label>
        <input type="password" id="password2" required />
      </div>
      <div>
        <button>Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'SignupView',
    data() {
      return {}
    },
    computed: {},
    methods: {},
  }
</script>

<style></style>
