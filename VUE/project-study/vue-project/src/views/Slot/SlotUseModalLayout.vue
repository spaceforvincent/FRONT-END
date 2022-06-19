<modal-layout>
<template #header>
    <h1>팝업 타이틀</h1>
    </template>


<template #default>
    <p>팝업 컨텐츠1</p>
    <p>팝업 컨텐츠2</p>
</template>

<template #footer>
    <button type="button">닫기</button>
</template>
</modal-layout>

<script>
export default {

    name: '',

    components:{}, 

    data() {

        return {

            sampleData: ''

        

    };

},

    created() {}, 

    mounted() {}, 

    unmounted() {}, 

    methods: {}
}

</script>