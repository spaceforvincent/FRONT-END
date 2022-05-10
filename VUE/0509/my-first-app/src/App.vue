<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  <!-- 3. 보여주기 -->
  <!-- 카멜 케이스 -->
  <!-- <TheAbout :my-message="parentData"/> -->
  <!-- 케밥 케이스 -->
  <the-about :my-message="parentData" @childInputChange="parentGetChange"></the-about>
  </div>
</template>

<script>
// 1. 불러오기
import TheAbout from './components/TheAbout.vue'
export default {
  name: 'App',
  //2. 등록하기
  components: {
    TheAbout,
  },
  data: function() {
    return {
      parentData: "This is parent data to child component"
    }
  },
  methods:{
    parentGetChange: function(inputData){
      console.log(`About으로부터 ${inputData}를 받음`)
      console.log("들리는군...")
    }
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
