<template>

<div>
    <img :src="imgSrc" />
</div>
</template>
<script>
export default {

    name: 'DataBindingAttribute',

    components:{}, 

    data() {

        return {

            imgSrc: 'https://kr.vuejs.org/images/logo.png'


    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {}
}

</script>