<template>
  <div id="app">
    <h1>App</h1>
    <input @input="InputAppKeyword" type="text">
    <p>parentData: {{ parentData }}</p>
    <p>childData: {{ childData }}</p>
    <!-- app-parent에 appdata라는 이름으로 appdata를 prop한다 -->
    <app-parent 
    :app-data="appData" 
    :parent-data="parentData"
    :child-data="childData"
    @input-change-parent="onParentInputKeyword"
    @input-change-child="onChildInputKeyword"
    >
</app-parent>

  </div>
</template>

<script>
import AppParent from './components/AppParent.vue'

export default {
  name: 'App',
  data: function(){
    return {
      appData: null,
      parentData: null,
      childData: null,
    }
  },
  components: {
    AppParent,
  },
  methods: {
    InputAppKeyword: function(event){
            this.appData = event.target.value
        },
    onParentInputKeyword: function(parentData){
      this.parentData = parentData
    },
    onChildInputKeyword: function(childData){
      this.childData = childData
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