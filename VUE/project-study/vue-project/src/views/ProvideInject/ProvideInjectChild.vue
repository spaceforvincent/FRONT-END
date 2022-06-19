<template>

<div>

</div>
</template>
<script>
export default {

    name: 'ProvideInjectChild', 
    inject: ['itemLength'],
    mounted() {
        console.log(this.itemLength)
    }, 

    unmounted() {}, 

    methods: {}
}

</script>