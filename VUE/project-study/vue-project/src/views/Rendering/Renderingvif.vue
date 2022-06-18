<template>

<div>
<h1 v-if="type=='A'">A</h1>
<h1 v-else-if="type=='B'">B</h1>
<h1 v-else>C</h1>
</div>
</template>`₩~`
<script>
export default {

    name: 'renderingVif',

    components:{}, 

    data() {

        return {

            type: 'A'

        

    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {}
}

</script>