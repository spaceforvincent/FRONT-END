<template>
  <div>
      <h1>AppParent</h1>
      <input @input="onInputParentKeyword" type="text">
      <p> appData : {{ appData }} </p>
      <p> childData : {{ childData }} </p>
      <!-- app-child에 appData라는 이름으로 appData를 prop한다 -->
      <app-child 
      :app-data="appData"
      :parent-data="parentData"
      :child-data="childData"
      @input-change-child="onInputChildKeyword"
      >
      </app-child>
  </div>
</template>

<script>
import AppChild from '@/components/AppChild.vue'
export default {
    name:'AppParent',
    
    props: {
        appData: String,
        parentData: String,
        childData: String,
    },
    components: {
            AppChild
    },
    
    methods: {
        onInputParentKeyword: function(event){
            this.$emit('input-change-parent', event.target.value)
        },
        onInputChildKeyword: function(childData){
            this.$emit('input-change-child', childData)
        }
    }
}
</script>

<style>

</style>