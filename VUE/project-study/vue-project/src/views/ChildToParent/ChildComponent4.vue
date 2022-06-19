<template>

<div>

</div>
</template>
<script>
export default {

    name: 'ChildComponentFourth',

    components:{}, 

    data() {

        return {

            msg: '자식 컴포넌트로부터 보내는 메시지'

        

    };

},

    created() {}, 

    mounted() {
        this.$emit('send-message', this.msg)
    }, 

    unmounted() {}, 

    methods: {}
}

</script>