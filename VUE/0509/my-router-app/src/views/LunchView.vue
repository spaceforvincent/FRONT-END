<template>
  <div>
  <h2>점심메뉴</h2>
  <button @click="pickOnLunchMenu">Pick Lunch</button>
  <p>{{ selectedLunchMenu }}</p>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
    name: 'lunchView',
    data: function(){
        return {
            lunch: ['빵','햄버거','라면','김밥'],
            selectedLunchMenu: null,
        }
    },
    methods: {
        pickOnLunchMenu: function() {
            this.selectedLunchMenu = _.sample(this.lunch)
        }
    }
}
</script>

<style>

</style>