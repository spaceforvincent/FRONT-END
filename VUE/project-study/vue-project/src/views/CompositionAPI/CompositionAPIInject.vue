<template>

<div>
<h1>{{title}}</h1>
</div>
</template>
<script>
import { inject } from 'vue';
export default {

    setup() {
        const title = inject('title'); //inject를 사용하여 provide에서 정의한 key로 데이터를 전달받음
        return {

            title

    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {}
}

</script>