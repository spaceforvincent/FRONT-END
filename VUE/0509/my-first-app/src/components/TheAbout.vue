<template>
<!-- template 안에는 반드시 하나의 element만 있어야 한다. -->
  <div>
    <h1>About</h1>
  <h1>{{myMessage}}</h1>
  <p>아하! div는 하나구나</p>
  <input type="text"
  v-model="childInputData" 
  @keyup.enter="childInputChange">
  </div>
</template>

<script>
export default {
  name:'TheAbout',
  props: { //부모가 전달해주는 내용
    myMessage : String,
  },
  data: function() {
    return {
      childInputData: '',
    }
  },
  methods:{
    childInputChange: function(){
      console.log('Enter', this.childInputData)
      this.$emit('child-input-change', this.childInputData)
    }
  }
}

</script>

<style>

</style>