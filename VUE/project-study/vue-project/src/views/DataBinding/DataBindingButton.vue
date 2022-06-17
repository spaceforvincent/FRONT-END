<template>

<div>
    <input type="text" v-model="textValue" />
    <button type="button" :disabled="textValue==''">Click</button>
</div>
</template>
<script>
export default {

    name: 'DataBindingButton',

    components:{}, 

    data() {

        return {

            textValue: ''

        

    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {}
}

</script>