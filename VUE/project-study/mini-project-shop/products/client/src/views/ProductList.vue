<template>
  <div>
    <main class="mt-3">
      <div class="container">
        <div class="row mb-3">
          <div class="col-12">
            <select class="form-select">
              <option selected>Open this select menu</option>
              <option value="1">노트북</option>
              <option value="2">모니터</option>
              <option value="3">마우스/키보드</option>
            </select>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row g-3">
          <div
            class="col-xl-3 col-lg-4 col-md-6"
            v-for="(product, i) in productList"
            :key="i"
          >
            <div class="card" style="width: 18rem">
              <a @click="goToDetail(product.id)"
                ><img :src="product.path" class="card-img-top" alt="..."
              /></a>
              <div class="card-body">
                <h5 class="card-title">
                  {{ product.product_name }}
                </h5>
                <p class="card-text">
                  <span class="badge bg-dark mr-1">{{
                    product.category1
                  }}</span>
                  <span class="badge bg-dark mr-1">{{
                    product.category2
                  }}</span>
                  <span class="badge bg-dark mr-1">{{
                    product.category3
                  }}</span>
                </p>
                <div class="d-flex justify-content-between align-item">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      장바구니 담기
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      주문하기
                    </button>
                  </div>
                  <small class="text-dark">{{ product.product_price }}원</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: []
    }
  },
  created() {
    this.getProductList()
  },
  methods: {
    async getProductList() {
      this.productList = await this.$api('/api/productList', {})
      console.log(this.productList)
    },
    goToDetail(productId) {
      this.$router.push({ path: '/detail', query: { product_id: productId } })
    }
  }
}
</script>
