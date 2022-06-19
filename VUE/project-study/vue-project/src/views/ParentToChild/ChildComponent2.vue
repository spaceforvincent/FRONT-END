<template>

<div>

</div>
</template>
<script>
export default {
    name : 'ChildComponentSecond',
    components:{}, 

    data() {

        return {

            sampleData: ''

        

    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {
        callFromParent() {
            console.log('부모 컴포넌트에서 직접 호출한 함수')
        }
    }
}

</script>