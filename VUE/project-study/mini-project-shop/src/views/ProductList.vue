<template>
  <div class="about">
    <h1>This is an ProductList page</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.getProductList()
  },
  methods: {
    async getProductList() {
      const productList = await this.$api('/api/productList', {})
      console.log(productList)
    }
  }
}
</script>
