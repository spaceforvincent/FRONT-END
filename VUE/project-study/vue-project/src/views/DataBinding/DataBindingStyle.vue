<template>

<div>
    <div :style="styleObject">인라인 스타일 바인딩</div>
</div>
</template>
<script>
export default {

    name: 'DataBindingStyle',

    components:{}, 

    data() {

        return {

            styleObject: {
                color: 'red',
                fontSize: '13px'
            }

        

    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {}
}

</script>