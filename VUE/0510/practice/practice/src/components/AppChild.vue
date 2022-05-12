<template>
  <div>
      <h1>AppChild</h1>
      <input @input="InputChildKeyword" type="text">
      <p :app-data="appData"> appData : {{ appData }} </p>
      <p :parent-data="parentData"> parentData: {{ parentData }}</p>
      <p :child-data="childData"> childData : {{ childData }} </p>
  </div>
</template>

<script>
export default {
    name:'AppChild',
    props: {
        appData: String,
        parentData: String,
        childData: String,
    },
    methods: {
        InputChildKeyword: function(event){
            this.$emit('input-change-child', event.target.value)
        }
    }
}
</script>

<style>

</style>