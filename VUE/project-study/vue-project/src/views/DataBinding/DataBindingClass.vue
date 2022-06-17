<template>

<div>
<div class="container" :class="{'active': isActive, 'text-red': hasError}"> Class Binding</div>
</div>
</template>
<script>
export default {

    name: 'DataBindingClass',

    components:{}, 

    data() {

        return {

            isActive: true,
            hasError: false

        

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