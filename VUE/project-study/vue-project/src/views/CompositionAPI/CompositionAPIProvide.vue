<template>

<div>
<CompositionAPIInject />
</div>
</template>
<script>
import {provide} from 'vue';
import CompositionAPIInject from './CompositionAPIInject'
export default {

    name: 'CompositionAPIProvide',

    components:{CompositionAPIInject}, 

    setup() {
        provide('title', 'Vue.js 프로젝트')
        //provide 함수를 통해서 전달할 키, 값 설정

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {}
}

</script>