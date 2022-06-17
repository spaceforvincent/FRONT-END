<template>

<div>
<div class="container" :class="[activeClass, text-red]">Class Binding</div>
</div>
</template>
<script>
export default {

    name: 'DataBindingClass2',

    components:{}, 

    data() {

        return {

            activeClass: 'active',
            errorClass: 'text-red'

        

    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {}
}

</script>
<style scoped>
    container {
        width: 100%;
        height: 200px;
    }
    .active {
        background-color: yellow;
        font-weight: bold;
    }
    .text-red {
        color:red
    }
</style>