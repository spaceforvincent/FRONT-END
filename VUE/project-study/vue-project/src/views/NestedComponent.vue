<template>
    <div>
        <PageTitle :title="title"/>
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle'

export default {
    components: {PageTitle}, //현재 컴포넌트에서 사용할 컴포넌트 등록
    data () {
        return {
            title : '동적페이지 타이틀'
    }
}}
</script>
