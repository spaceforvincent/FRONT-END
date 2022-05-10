<template>
  <div>
    <h1>로또 번호 추천</h1>
    <h2>{{ $route.params.lottoNum}} 개의 번호를 추천합니다.</h2>
    <button @click="getLuckyNums">Pick My Lotto Numbers</button>
    <p>오늘의 추천 로또 번호</p>
    <p>{{ selectedLuckyNums }}</p>
  </div>
</template>

<script>
  import _ from 'lodash'
export default {
    name: 'LottoView',
    data: function() {
      return {
        selectedLuckyNums: [],
      }
    },
    methods: {
      getLuckyNums: function() {
        const numbers = _.range(1, 46)
        this.selectedLuckyNums = _.sampleSize(
          numbers,
          this.$route.params.lottoNum,
        )
      },
    },
}
</script>

<style>

</style>