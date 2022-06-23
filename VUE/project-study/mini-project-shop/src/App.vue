<template>
  <div>
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>
<script>
import HeaderComponent from './layouts/header.vue'
import FooterComponent from './layouts/footer.vue'
export default {
  components: { HeaderComponent, FooterComponent },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>
