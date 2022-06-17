<template>

<div>
<div>{{htmlstring}}</div>
<div v-html="htmlstring"></div>
<div></div>
</div>
</template>
<script>
export default {

    data() {

        return {

            htmlstring: '<p style="color:red;">This is a red string</p>'

        

    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {}
}

</script>