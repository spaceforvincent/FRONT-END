<template>
  <div>
    <h1>{{ article.title }}</h1>

    <p>
      {{ article.content }}
    </p>
    <!-- Article Edit/Delete UI -->
    <div>
      <button>Edit</button>
      |
      <button>Delete</button>
    </div>

    <!-- Article Like UI -->
    <div>
      Likeit:
      <button>123</button>
    </div>

    <hr />
    <!-- Comment UI -->
  </div>
</template>

<script>
  // import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ArticleDetail',
    data() {
      return {
        articlePk: 123,
      }
    },
    computed: {},
    methods: {},
    created() {},
  }
</script>

<style></style>
