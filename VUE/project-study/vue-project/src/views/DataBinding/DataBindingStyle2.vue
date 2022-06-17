<template>

<div>
<div :style="[baseStyle, addStyle]">인라인 스타일 바인딩 </div>
</div>
</template>
<script>
export default {

    name: 'DataBindingStyle2',

    components:{}, 

    data() {

        return {

            baseStyle: 'background-color:yellow; width:100%; height:200px;',
            addStyle: 'color:red; font-weight:bold;'

        

    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {}
}

</script>